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
  // console.log(noteList.printList())
  // console.log(listView.noteListToPrint)
  // console.log(listView.printHTML())

  try {
    new assert(listView.printHTML() == "<ul><li>Roar</li></ul>", "notes not printed as HTML", "checkNoteListHTMLCanBePrinted").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}


checkNoteListViewExists();
checkNoteListHTMLCanBePrinted();
