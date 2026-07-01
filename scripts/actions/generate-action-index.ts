import * as fs from 'fs';
import * as path from 'path';

const actionsDir = path.join(process.cwd(), 'openapi', 'actions');
const docsDir = path.join(process.cwd(), 'docs', 'actions');
const files = fs.readdirSync(actionsDir).filter(f => f.endsWith('.openapi.json'));

let markdown = `# Action Index\n\n`;

for (const file of files) {
  const filePath = path.join(actionsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const schema = JSON.parse(content);

  markdown += `## ${schema.info.title}\n`;
  markdown += `- **File**: \`openapi/actions/${file}\`\n`;
  if (schema.paths) {
    for (const [pathKey, pathItem] of Object.entries(schema.paths)) {
       const methods = Object.keys(pathItem as any).join(', ').toUpperCase();
       markdown += `- **Route**: \`${methods} ${pathKey}\`\n`;
    }
  }
  markdown += '\n';
}

fs.writeFileSync(path.join(docsDir, 'action-index.md'), markdown);
console.log('[INFO] Generated docs/actions/action-index.md');
