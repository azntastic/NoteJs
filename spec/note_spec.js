function  checkNoteMethodExists() {
  var note = new Note("hello");

    try {
      new assert(note.showText() , "not a function").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }

};

function  checkNoteIsString() {
  var note = new Note("hello");

    try {
      new assert(note.showText() , "not a string").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }

};


checkNoteMethodExists();
checkNoteIsString()
