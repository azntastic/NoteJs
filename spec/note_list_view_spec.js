function checkNoteListViewExists() {
  var listView = new ListView();

  try {
    new assert(listView, "not defined", "checkNoteListViewExists").isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkNoteListCanBePrinted() {
  var noteList = new NoteList();
  noteList.create("Roar");
  var listView = new ListView(noteList);

  try {
    new assert(listView.printHTML() == "<ul><li>Roar</li></ul>", "notes not printed as HTML", "checkNoteListCanBePrinted").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


checkNoteListViewExists();
checkNoteListCanBePrinted();
