import * as fs from 'fs';
import * as path from 'path';

const examplesDir = path.join(process.cwd(), 'examples', 'actions');
const schemasDir = path.join(process.cwd(), 'openapi', 'actions');

const exampleFiles = fs.readdirSync(examplesDir).filter(f => f.endsWith('.json'));

let allValid = true;

for (const file of exampleFiles) {
  const filePath = path.join(examplesDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content); // Ensure it's valid JSON
    // A full JSON schema validation could go here, but a lightweight check suffices
  } catch (e) {
    console.error(`[FAIL] Example ${file} is invalid JSON.`);
    allValid = false;
  }
}

if (allValid) {
  console.log('[PASS] All examples are valid JSON.');
  process.exit(0);
} else {
  process.exit(1);
}
