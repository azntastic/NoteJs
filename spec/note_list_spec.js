function  checkNoteListMethodExists() {
  var noteList = new NoteList();

    try {
      new assert(noteList , "not defined", "checkNoteListMethodExists").isDefined();
    }
    catch(err) {
      console.log(err.message);
    }
}

function  checkNoteListIsArray() {
  var noteList = new NoteList();

    try {
      new assert(Array.isArray(noteList.list) , "not an array", "checkNoteListIsArray").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}

function checkNotesAreStored() {
  var noteList = new NoteList();
  var note = new Note("Roar");
  noteList.list.push(note);

    try {
      new assert(noteList.list[0].showText() == "Roar", "note not stored", "checkNotesAreStored").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}


function checkNoteListCanBePrinted() {
    var noteList = new NoteList();
    var firstNote = new Note("Roar");

    noteList.list.push(firstNote);
    try {
      new assert(noteList.printList()[0] === "Roar", "notes not printed", "checkNoteListCanBePrinted").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}

function createsAndStoresNote() {
  var noteList = new NoteList();
  noteList.create("Roar")
  try {
    new assert(noteList.printList()[0] === "Roar", "note not created", "createsAndStoresNote").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

checkNoteListMethodExists();
checkNoteListIsArray();
checkNotesAreStored();
checkNoteListCanBePrinted();
createsAndStoresNote();
