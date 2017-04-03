(function(exports){
// possible to just nest the functions within NoteController rather than
// using prototype pattern?
  function NoteController(noteList) {
    this.listToDisplay = new ListView(noteList);
    // function DisplayCurrentNote() {
    //   showNote(getNoteFromURL(window.location));
    // }
  };

  NoteController.prototype.DisplayNotes = function(element) {
    element.innerHTML = this.listToDisplay.printHTML()
  };

  NoteController.prototype.urlChangeDisplaysNotes = function() {
    window.addEventListener("hashchange", this.DisplayCurrentNote);
    // should bind this after this.DisplayCurrentNote
    // Would probably solve the following problem with splitting functions
  };

  NoteController.prototype.DisplayCurrentNote = function() {
    var noteid = location.hash.split('').slice(-1).pop()

    document
      .getElementById("app")
      .innerHTML = this.notelist.list[noteid].showText()
  };

  var submit = document.getElementById("form");
  form.addEventListener("submit", function(e){
    console.log(e)
    console.log(e.path[0][0].value)
    e.preventDefault();
    NoteController.listToDisplay.create(e.path[0][0].value)
    console.log(listToDisplay)
  })



  // NoteController.prototype.listenForSubmit = function(){
  //
  // }

  // NoteController.prototype.getNoteFromURL = function(location) {
  //   return location.hash.split('#')[1];
  // };


  // NoteController.prototype.showNote = function(note) {
  //   document
  //     .getElementById("app")
  //     .innerHTML = note
  // }

  exports.NoteController = NoteController;

})(this)
