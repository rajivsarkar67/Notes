// importing using npm
// const validator = require('validator');
// const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');
// console.log(myFunc());



// add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log('Title: ', argv.title);
        // console.log('Body: ', argv.body);
        notes.addNote(argv.title, argv.body);
    }
});

// remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

// list
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => notes.listNotes()
});

// read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
});



yargs.parse();