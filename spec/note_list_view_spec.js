function checkNoteListViewExists() {
  var listView = new ListView();

  try {
    new assert(listView, "not defined", "checkNoteListViewExists").isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkNoteListHTMLCanBePrinted() {
  var noteList = new NoteList();
  noteList.create("Roar");
  var listView = new ListView(noteList);

  try {
    new assert(listView.printHTML() == "<ul><li>Roar</li></ul>", "notes not printed as HTML", "checkNoteListHTMLCanBePrinted").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkNoteListHTMLPrintsNoNotes() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);
  try {
    new assert(listView.printHTML() == "<ul>No notes found</ul>", "can't handle no notes", "checkNoteListHTMLPrintsNoNotes").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkNoteListViewMaxChar() {
  var noteList = new NoteList();
  noteList.create("theweathertodayisverysunny");
  var listView = new ListView(noteList);

  try {
    new assert(listView.printHTML() == "<ul><li>theweathertodayisver</li></ul>", "notes do not have a max of 20 characters", "checkNoteListViewMaxChar").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


checkNoteListViewExists();
checkNoteListHTMLCanBePrinted();
checkNoteListHTMLPrintsNoNotes();
checkNoteListViewMaxChar();
