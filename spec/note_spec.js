function  checkNoteMethodExists() {
  var note = new Note("hello");

    try {
      new assert(note , "not defined", "checkNoteMethodExists").isDefined()
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

function checkTextInputIsPrinted() {
  var note = new Note("roar");

  try {
    new assert(note.showText() === "roar", "not true", "checkTextInputIsPrinted").isTrue()
  }
  catch(err) {
    console.log(err.message)
  }
};

function checkNoteHasAnID() {
  var note = new Note("roar", 1);
  console.log(note.id)

  try{
    new assert(note.id === 1, "ID doesn't match expectation", "checkNoteHasAnID").isTrue()
  }
  catch(err) {
    console.log(err.message)
  }
}



checkNoteMethodExists();
checkNoteIsString();
checkTextInputIsStored();
checkTextInputIsPrinted();
checkNoteHasAnID();
