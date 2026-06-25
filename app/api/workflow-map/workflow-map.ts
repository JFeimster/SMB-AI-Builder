export class ValidationError extends Error {
  details?: Record<string, unknown>;

  constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

export interface WorkflowStep {
  label: string;
  owner?: string;
  tool?: string;
  type?: "task" | "decision" | "handoff" | "ai_task" | "human_review" | "output";
  notes?: string;
}

export interface WorkflowMapRequest {
  workflowName: string;
  mapType: "current_state" | "future_state" | "pilot_state";
  steps: WorkflowStep[];
  bottlenecks?: string[];
  humanReviewPoints?: string[];
  desiredOutputFormat?: "plain_text" | "mermaid" | "both";
  notes?: string;
}

export interface WorkflowMapResponse {
  workflowName: string;
  mapType: string;
  plainTextMap?: string;
  mermaidDiagram?: string;
  bottleneckMarkers: string[];
  humanReviewMarkers: string[];
  cleanupSuggestions: string[];
  assumptions: string[];
  nextStep: string;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ValidationError(`${fieldName} is required and must be a non-empty string.`);
  }
  return value.trim();
}

function cleanOptionalString(value: unknown, fieldName: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string when provided.`);
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function parseStringArray(value: unknown, fieldName: string): string[] {
    if (value === undefined) {
        return [];
    }
    if (!Array.isArray(value)) {
        throw new ValidationError(`${fieldName} must be an array of strings.`);
    }
    return value.filter(v => typeof v === 'string' && v.trim() !== "").map(v => v.trim());
}

export function validateWorkflowMapRequest(input: unknown): WorkflowMapRequest {
  if (!isPlainObject(input)) {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const workflowName = cleanRequiredString(input.workflowName, "workflowName");

  const mapTypeRaw = cleanRequiredString(input.mapType, "mapType");
  if (!["current_state", "future_state", "pilot_state"].includes(mapTypeRaw)) {
       throw new ValidationError("mapType must be 'current_state', 'future_state', or 'pilot_state'.");
  }
  const mapType = mapTypeRaw as "current_state" | "future_state" | "pilot_state";

  if (!Array.isArray(input.steps) || input.steps.length === 0) {
      throw new ValidationError("steps is required and must be a non-empty array.");
  }

  const steps = input.steps.map((step: any, index: number) => {
      if (!isPlainObject(step)) throw new ValidationError(`steps[${index}] must be an object.`);
      const label = cleanRequiredString(step.label, `steps[${index}].label`);
      const owner = cleanOptionalString(step.owner, `steps[${index}].owner`);
      const tool = cleanOptionalString(step.tool, `steps[${index}].tool`);

      let type: "task" | "decision" | "handoff" | "ai_task" | "human_review" | "output" | undefined = undefined;
      const typeRaw = cleanOptionalString(step.type, `steps[${index}].type`);
      if (typeRaw) {
          if (!["task", "decision", "handoff", "ai_task", "human_review", "output"].includes(typeRaw)) {
              throw new ValidationError(`steps[${index}].type must be a valid step type.`);
          }
          type = typeRaw as "task" | "decision" | "handoff" | "ai_task" | "human_review" | "output";
      }

      const notes = cleanOptionalString(step.notes, `steps[${index}].notes`);
      return { label, owner, tool, type, notes };
  });

  const bottlenecks = parseStringArray(input.bottlenecks, "bottlenecks");
  const humanReviewPoints = parseStringArray(input.humanReviewPoints, "humanReviewPoints");

  let desiredOutputFormat: "plain_text" | "mermaid" | "both" | undefined = undefined;
  const desiredOutputFormatRaw = cleanOptionalString(input.desiredOutputFormat, "desiredOutputFormat");
  if (desiredOutputFormatRaw) {
      if (!["plain_text", "mermaid", "both"].includes(desiredOutputFormatRaw)) {
          throw new ValidationError("desiredOutputFormat must be 'plain_text', 'mermaid', or 'both'.");
      }
      desiredOutputFormat = desiredOutputFormatRaw as "plain_text" | "mermaid" | "both";
  }

  const notes = cleanOptionalString(input.notes, "notes");

  return {
    workflowName,
    mapType,
    steps,
    bottlenecks,
    humanReviewPoints,
    desiredOutputFormat,
    notes
  };
}

export function generateWorkflowMap(input: WorkflowMapRequest): WorkflowMapResponse {
    const format = input.desiredOutputFormat || "both";
    const cleanupSuggestions: string[] = [];
    const bottleneckMarkers = input.bottlenecks || [];
    const humanReviewMarkers = input.humanReviewPoints || [];

    let plainTextMap = "";
    let mermaidDiagram = "";

    // Generate Plain Text Map
    if (format === "plain_text" || format === "both") {
        plainTextMap = `Workflow Map: ${input.workflowName} (${input.mapType.replace("_", " ")})\n\n`;
        input.steps.forEach((step, idx) => {
            let line = `${idx + 1}. ${step.label}`;
            const details: string[] = [];
            if (step.type) details.push(`Type: ${step.type}`);
            if (step.owner) details.push(`Owner: ${step.owner}`);
            if (step.tool) details.push(`Tool: ${step.tool}`);

            if (details.length > 0) {
                line += ` [${details.join(" | ")}]`;
            }
            if (step.notes) {
                line += `\n   Note: ${step.notes}`;
            }
            plainTextMap += line + "\n";
        });

        if (bottleneckMarkers.length > 0) {
            plainTextMap += `\nBottlenecks:\n`;
            bottleneckMarkers.forEach(b => plainTextMap += `- ${b}\n`);
        }
        if (humanReviewMarkers.length > 0) {
            plainTextMap += `\nHuman Review Points:\n`;
            humanReviewMarkers.forEach(h => plainTextMap += `- ${h}\n`);
        }
    }

    // Generate Mermaid Diagram
    if (format === "mermaid" || format === "both") {
        mermaidDiagram = `graph TD\n`;

        input.steps.forEach((step, idx) => {
            const nodeId = `Step${idx + 1}`;
            let shapeOpen = "[";
            let shapeClose = "]";

            if (step.type === "decision") {
                shapeOpen = "{"; shapeClose = "}";
            } else if (step.type === "output") {
                shapeOpen = "(["; shapeClose = "])";
            }

            let nodeLabel = step.label;
            if (step.owner) {
                nodeLabel += `<br/><i>(${step.owner})</i>`;
            }
            if (step.tool) {
                 nodeLabel += `<br/><b>[${step.tool}]</b>`;
            }

            // Mermaid uses double quotes if special chars exist. Let's just strip or handle them simply.
            // Replace quotes with single quotes to keep mermaid syntax valid.
            const safeLabel = nodeLabel.replace(/"/g, "'");

            mermaidDiagram += `    ${nodeId}${shapeOpen}"${safeLabel}"${shapeClose}\n`;

            if (idx > 0) {
                const prevNodeId = `Step${idx}`;
                mermaidDiagram += `    ${prevNodeId} --> ${nodeId}\n`;
            }

            if (step.type === "handoff") {
                cleanupSuggestions.push(`Step ${idx + 1} (${step.label}) is a handoff. Ensure clear data transfer criteria.`);
            } else if (!step.owner && step.type !== "output") {
                cleanupSuggestions.push(`Step ${idx + 1} (${step.label}) is missing an owner.`);
            }
        });

        if (humanReviewMarkers.length > 0) {
             mermaidDiagram += `\n    classDef review fill:#f9d0c4,stroke:#333,stroke-width:2px;\n`;
             // Roughly apply class to steps that might be human review if they match type
             const reviewIds = input.steps.map((s, i) => s.type === "human_review" ? `Step${i+1}` : null).filter(Boolean);
             if (reviewIds.length > 0) {
                 mermaidDiagram += `    class ${reviewIds.join(",")} review;\n`;
             }
        }
    }

    if (input.steps.length < 3) {
        cleanupSuggestions.push("Workflow seems very brief. Consider breaking it down into smaller atomic steps.");
    }

    const assumptions = [
        "The generated Mermaid diagram implies a linear flow from step 1 to N unless branching logic is provided.",
        "Tools and integrations shown are assumed based strictly on user input; no external tools were invented.",
        "A plain-text step map is linear by default."
    ];

    let nextStep = "";
    if (input.mapType === "current_state") {
        nextStep = "Review this current state map to identify bottlenecks, redundant steps, and automation opportunities.";
    } else if (input.mapType === "future_state" || input.mapType === "pilot_state") {
        nextStep = "Validate this future state map with stakeholders before building the automation.";
    }

    return {
        workflowName: input.workflowName,
        mapType: input.mapType,
        plainTextMap: (format === "plain_text" || format === "both") ? plainTextMap.trim() : undefined,
        mermaidDiagram: (format === "mermaid" || format === "both") ? mermaidDiagram.trim() : undefined,
        bottleneckMarkers,
        humanReviewMarkers,
        cleanupSuggestions,
        assumptions,
        nextStep
    };
}
