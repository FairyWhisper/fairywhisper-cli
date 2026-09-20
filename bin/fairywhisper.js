#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('fairywhisper')
  .description('A magical project bootstrapping CLI')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new project ritual')
  .action(() => {
    console.log("🪄 Running the FairyWhisper init ritual...");
  });

  program.parse();
