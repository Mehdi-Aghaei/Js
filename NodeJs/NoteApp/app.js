import fileSystem from 'fs';
import chalk from 'chalk';
import getNotes from './notes.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .parse()

console.log(process.argv);