function  returnNoteMethodExists() {
  var note = new Note();
  if (typeof note.showText() == undefined){
    throw new Error("Method doesn't exist!");
  }
}

function testsForInstantiationArg() {
  var note = new Note();
  if (note.text == null) {
    throw new Error("no text passed")
  }
}


returnNoteMethodExists();
testsForInstantiationArg();
