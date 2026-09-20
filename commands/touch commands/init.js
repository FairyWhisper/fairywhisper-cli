const fs = require('fs-extra');
const path = require('path');

async function initProject() {
  const projectPath = path.join(process.cwd(), 'fairywhisper-project');

  // Create the folder
  await fs.ensureDir(projectPath);

  // Create a starter file
  const starterFile = path.join(projectPath, 'README.md');
  await fs.writeFile(starterFile, '# Welcome to your FairyWhisper project!');

  console.log(`✨ Project initialized at: ${projectPath}`);
}

module.exports = initProject;
