function checkNoteControllerExists(){
  var noteList = new NoteList
  var controller = new NoteController(noteList)

  try {
    new assert(controller , "not defined", "checkNoteControllerExists").isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkDisplayNotesMethodCreatesHTML() {

  var dummyelement = function(){
    this.innerHTML = ''
  };

  var noteList = new NoteList
  noteList.create("Roar")
  var controller = new NoteController(noteList)
  controller.DisplayNotes(dummyelement)

  try {
    new assert(dummyelement.innerHTML === "<ul><li>Roar</li></ul>", "doesn't transform to HTML","checkDisplayNotesMethodCreatesHTML").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }

}

checkNoteControllerExists()
checkDisplayNotesMethodCreatesHTML()
