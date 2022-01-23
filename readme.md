This is a note taking app, and can be used with the help of command line. Node libraries chalk and yargs have been used.
To run the app, node has to be installed already in the system.
Then go to the command line, navigate inside the folder notes-app, then run the command: npm install
This will install the required libraries in your folder.

There are four commands for running the notes app.
In place of noteTitle, give the title of the note, in place of noteBody, give the body of the note:

node app.js add --title="noteTitle" --body="noteBody" : command to add a note in our app; duplicate titles will not be added.
node app.js remove --title="noteTitle" : command to remove a specific note.
node app.js list : command to list all the notes in our app.
node app.js read --title="noteTitle" : command to read the title and body of a specific note.