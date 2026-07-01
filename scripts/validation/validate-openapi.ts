import * as fs from "fs";
import * as path from "path";

type JsonObject = Record<string, unknown>;

function isObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const actionsDir = path.join(process.cwd(), "openapi", "actions");
const files = fs.readdirSync(actionsDir).filter((file) => file.endsWith(".openapi.json"));

let allValid = true;

for (const file of files) {
  const filePath = path.join(actionsDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  let schema: unknown;

  try {
    schema = JSON.parse(content) as unknown;
  } catch {
    console.error(`[FAIL] ${file} is not valid JSON.`);
    allValid = false;
    continue;
  }

  if (!isObject(schema)) {
    console.error(`[FAIL] ${file} root schema must be an object.`);
    allValid = false;
    continue;
  }

  if (schema.openapi !== "3.1.0") {
    console.error(`[FAIL] ${file} does not use openapi 3.1.0.`);
    allValid = false;
  }

  const info = schema.info;
  if (!isObject(info) || typeof info.title !== "string" || info.title.trim().length === 0) {
    console.error(`[FAIL] ${file} is missing info.title.`);
    allValid = false;
  }

  const paths = schema.paths;
  if (!isObject(paths) || Object.keys(paths).length === 0) {
    console.error(`[FAIL] ${file} has no paths.`);
    allValid = false;
    continue;
  }

  for (const [pathKey, pathItem] of Object.entries(paths)) {
    if (!isObject(pathItem)) {
      console.error(`[FAIL] ${file} ${pathKey} path item must be an object.`);
      allValid = false;
      continue;
    }

    for (const [method, op] of Object.entries(pathItem)) {
      if (!isObject(op)) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} operation must be an object.`);
        allValid = false;
        continue;
      }

      if (typeof op.operationId !== "string" || op.operationId.trim().length === 0) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing operationId.`);
        allValid = false;
      }

      if (method === "post" && !isObject(op.requestBody)) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing requestBody.`);
        allValid = false;
      }

      const responses = op.responses;
      if (!isObject(responses) || !isObject(responses["200"])) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing 200 response.`);
        allValid = false;
      }
    }
  }
}

if (allValid) {
  console.log("[PASS] All OpenAPI schemas are valid.");
  process.exit(0);
} else {
  process.exit(1);
}
