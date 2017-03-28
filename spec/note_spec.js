function  returnNoteMethodExists() {
  var note = new Note();

    try {
      new assert(note.showtext , "not a function").isDefined()
    }
    catch(err) {
      console.log("not a function")
    }

};

// function testsForInstantiationArg() {
//   var note = new Note("text");
//   assert.isTrue( note.text === "text");
// };


returnNoteMethodExists();
// testsForInstantiationArg();
