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
  console.log(noteList.list)
    try {
      new assert(Array.isArray(noteList.list) , "not an array", "checkNoteListIsArray").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};

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
