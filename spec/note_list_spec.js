function  checkNoteListMethodExists() {
  var noteList = new NoteList();

    try {
      new assert(noteList , "not defined", "checkNoteListMethodExists").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkNoteListIsArray() {
  var noteList = new NoteList();
    try {
      new assert(Array.isArray(noteList.list) , "not an array", "checkNoteListIsArray").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};

function checkNotesAreStored() {
  var noteList = new NoteList();
  var note = new Note("Roar");
  noteList.list.push(note);

    try {
      new assert(noteList.list[0].showText() == "Roar", "note not stored", "checkNotesAreStored").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};

function checkPrintNoteListExists() {
  var noteList = new NoteList();
    try {
      new assert(noteList.printList(), "not defined", "checkPrintNoteListExists").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
}
// function  checkTextInputIsStored() {
//   var note = new Note("hello");
//
//     try {
//       new assert(note.text === "hello", "not true", "checkTextInputIsStored").isTrue()
//     }
//     catch(err) {
//       console.log(err.message)
//     }
// };
//
// function checkTextInputIsPrinted() {
//   var note = new Note("roar");
//
//   try {
//     new assert(note.showText() === "roar", "not true", "checkTextInputIsPrinted").isTrue()
//   }
//   catch(err) {
//     console.log(err.message)
//   }
// };
//
//

checkNoteListMethodExists();
checkNoteListIsArray();
checkNotesAreStored();
checkPrintNoteListExists();
