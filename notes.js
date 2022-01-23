const fs = require('fs');
const chalk = require('chalk');
const { ElementFlags } = require('typescript');

// Function for adding a note
const addNote = (title, body) => {
    // console.log('Reaching here');
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    }
    else{
        console.log(chalk.bgRed('Note title taken!'));
    }
}

// Function for removing a note
const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter(el => el.title !== title);
    if(notes.length > newNotes.length){
        saveNotes(newNotes);
        console.log(chalk.bgGreen("Note deleted!"));
    }
    else{
        console.log(chalk.bgRed("No note with this title found"));
    }
}

// Function to list all notes
const listNotes = () => {
    console.log("----------Your notes----------");
    const notes = loadNotes();
    console.log()
    notes.forEach(el=> console.log(el.title));
}

// Function for reading a note
const readNote = (title) => {
    const notes = loadNotes();
    let found = 0;
    notes.forEach(note => {
        if(note.title === title){
            console.log(chalk.inverse(note.title));
            console.log(note.body);
            found = 1;
        }
    });
    if(found === 0)
            console.log(chalk.bgRed("Note with given title not found"));
    // const newNotes = notes.filter(el => el.title !== title);
    // if(notes.length > newNotes.length){
    //     saveNotes(newNotes);
    //     console.log(chalk.bgGreen("Note deleted!"));
    // }
    // else{
    //     console.log(chalk.bgRed("No note with this title found"));
    // }
}

// Function to save the updated JSON file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// Function to load and parse the previous JSON file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}