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
    // var secondNote = new Note("Meow");

    noteList.list.push(firstNote);
    // noteList.list.push(secondNote);
    // console.log(noteList.list);
    // console.log(noteList.printList())
    // console.log(noteList.list[0])
    // console.log(noteList.list[0].showText())
    try {
      new assert(noteList.printList() == "Roar", "notes not printed", "checkNoteListCanBePrinted").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}

checkNoteListMethodExists();
checkNoteListIsArray();
checkNotesAreStored();
checkNoteListCanBePrinted();
