#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const initProject = require('../commands/touch commands/init.js');

program
  .name('fairywhisper')
  .description('A magical project bootstrapping CLI')
  .version('1.0.0');


program
  .command('init')
  .description('Initialize a new project ritual')
  .action(() => {
    initProject();
  });

   program.parse();