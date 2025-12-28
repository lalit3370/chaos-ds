/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Error: Please provide a component name');
  console.error('Usage: node scripts/scaffold-component.js ComponentName');
  process.exit(1);
}

// Validate component name (PascalCase)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('❌ Error: Component name must be in PascalCase (e.g., MyButton)');
  process.exit(1);
}

const componentDir = path.join(projectRoot, 'src', 'components', componentName);

// Check if component already exists
if (fs.existsSync(componentDir)) {
  console.error(`❌ Error: Component "${componentName}" already exists at ${componentDir}`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Create index.js
const indexContent = `export { default } from './${componentName}';
`;

// Create component JSX file
const jsxContent = `import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.scss';

const ${componentName} = ({ children, ...props }) => {
  return (
    <div className="ds-${componentName.toLowerCase()}" {...props}>
      {children}
    </div>
  );
};

${componentName}.propTypes = {
  children: PropTypes.node,
};

export default ${componentName};
`;

// Create SCSS file
const scssContent = `.ds-${componentName.toLowerCase()} {
  // Add styles here
}
`;

// Create Storybook stories file
const storiesContent = `
import ${componentName} from '../src/components/${componentName}';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    children: '${componentName}',
  },
};
`;

// Write files
try {
  fs.writeFileSync(path.join(componentDir, 'index.js'), indexContent);
  fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), jsxContent);
  fs.writeFileSync(path.join(componentDir, `${componentName}.scss`), scssContent);
  fs.writeFileSync(
    path.join(projectRoot, 'stories', `${componentName}.stories.jsx`),
    storiesContent
  );

  console.log(`✅ Component "${componentName}" created successfully!`);
  console.log(`\n📁 Files created:`);
  console.log(`  - src/components/${componentName}/index.js`);
  console.log(`  - src/components/${componentName}/${componentName}.jsx`);
  console.log(`  - src/components/${componentName}/${componentName}.scss`);
  console.log(`  - stories/${componentName}.stories.jsx`);
  console.log(`\n📝 Next steps:`);
  console.log(`  1. Update src/index.js to export the new component`);
  console.log(`  2. Edit the component files as needed`);
} catch (error) {
  console.error('❌ Error creating component:', error.message);
  process.exit(1);
}
