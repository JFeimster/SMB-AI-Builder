import * as fs from 'fs';
import * as path from 'path';

const actionsDir = path.join(process.cwd(), 'openapi', 'actions');
const combinedDir = path.join(process.cwd(), 'openapi', 'combined');
const combinedPath = path.join(combinedDir, 'combined-smb-actions.openapi.json');

const files = fs.readdirSync(actionsDir).filter(f => f.endsWith('.openapi.json'));

const combinedSchema: any = {
  openapi: "3.1.0",
  info: {
    title: "SMB AI Workflow Actions",
    version: "1.0.0",
    description: "Combined no-auth actions."
  },
  servers: [
    {
      url: "https://YOUR-VERCEL-DOMAIN.vercel.app",
      description: "Replace with your deployed Vercel base URL."
    }
  ],
  paths: {},
  components: {
    schemas: {}
  }
};

let pathCount = 0;

for (const file of files) {
  const filePath = path.join(actionsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const schema = JSON.parse(content);

  if (schema.paths) {
    for (const [pathKey, pathItem] of Object.entries(schema.paths)) {
      if (combinedSchema.paths[pathKey]) {
        console.warn(`[WARN] Duplicate path ${pathKey} in ${file}.`);
      } else {
        combinedSchema.paths[pathKey] = pathItem;
        pathCount++;
      }
    }
  }

  if (schema.components && schema.components.schemas) {
    for (const [schemaKey, schemaItem] of Object.entries(schema.components.schemas)) {
      combinedSchema.components.schemas[schemaKey] = schemaItem;
    }
  }
}

fs.writeFileSync(combinedPath, JSON.stringify(combinedSchema, null, 2));
console.log(`[INFO] Combined ${pathCount} paths into ${combinedPath}`);
