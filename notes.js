console.log('Starting note.js');

var addNote = (title, body) =>  {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log("Getting All notes");
};

var getNote = (title) => {
	console.log("Getting note", title)
};			

var removeNote = (title) => {
	console.log("removing note", title)
};	

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};




