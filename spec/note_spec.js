function  checkNoteMethodExists() {
  var note = new Note("hello");

    try {
      new assert(note.showText() , "not a function", "checkNoteMethodExists").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkNoteIsString() {
  var note = new Note("hello");

    try {
      new assert(note.showText() , "not a string", "checkNoteIsString").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkTextInputIsStored() {
  var note = new Note("hello");

    try {
      new assert(note.text === "hello", "not true", "checkTextInputIsStored").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};



checkNoteMethodExists();
checkNoteIsString();
checkTextInputIsStored();
