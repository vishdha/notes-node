console.log('Starting note.js');

const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>  {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	//ES6 
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note
	}
};

var getAll = () => {
	console.log("Getting All notes");
};

var getNote = (title) => {
	var notes = fetchNotes();
	var readNote =  notes.filter((note) => note.title === title);
	return readNote[0];
};			

var removeNote = (title) => {
	var notes = fetchNotes();
	var removedNotes =  notes.filter((note) => note.title !== title);
	saveNotes(removedNotes);
	return notes.length !== removedNotes.length;
};	

var noteLog = (note) => {
	console.log('------');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	noteLog
};




