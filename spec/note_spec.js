function  returnNoteMethodExists() {
  var note = new Note();

  if (typeof note.printText() == undefined){
    throw new Error("Method doesn't exist!");
  }

}

returnNoteMethodExists();
