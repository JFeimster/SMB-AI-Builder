import * as fs from 'fs';
import * as path from 'path';

const actionsDir = path.join(process.cwd(), 'openapi', 'actions');
const files = fs.readdirSync(actionsDir).filter(f => f.endsWith('.openapi.json'));

let allValid = true;

for (const file of files) {
  const filePath = path.join(actionsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let schema: any;

  try {
    schema = JSON.parse(content);
  } catch (e) {
    console.error(`[FAIL] ${file} is not valid JSON.`);
    allValid = false;
    continue;
  }

  if (schema.openapi !== '3.1.0') {
    console.error(`[FAIL] ${file} does not use openapi 3.1.0.`);
    allValid = false;
  }

  if (!schema.info || !schema.info.title) {
    console.error(`[FAIL] ${file} is missing info.title.`);
    allValid = false;
  }

  if (!schema.paths || Object.keys(schema.paths).length === 0) {
    console.error(`[FAIL] ${file} has no paths.`);
    allValid = false;
    continue;
  }

  for (const [pathKey, pathItem] of Object.entries(schema.paths) as [string, any][]) {
    for (const [method, op] of Object.entries(pathItem)) {
      if (!op.operationId) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing operationId.`);
        allValid = false;
      }
      if (method === 'post' && !op.requestBody) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing requestBody.`);
        allValid = false;
      }
      if (!op.responses || !op.responses['200']) {
        console.error(`[FAIL] ${file} ${method.toUpperCase()} ${pathKey} is missing 200 response.`);
        allValid = false;
      }
    }
  }
}

if (allValid) {
  console.log('[PASS] All OpenAPI schemas are valid.');
  process.exit(0);
} else {
  process.exit(1);
}
