console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];


console.log('yargs', argv)

if(command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note Created');
		notes.noteLog(note);
	} else {
		console.log('Note Taken')
	};
} else if(command === 'list'){
	notes.getAll();
} else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note Read');
		notes.noteLog(note);
	} else {
		console.log('Note Not Found')
	};
} else if(command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was Removed' : 'Note Not Found';
	console.log(message);
} else {
	console.log("command not recognized")
}
