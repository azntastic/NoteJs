(function(exports){

  function NoteController(noteList) {
    this.listToDisplay = new ListView(noteList);
  };

  NoteController.prototype.DisplayNotes = function(element) {
    element.innerHTML = this.listToDisplay.printHTML()
  };

  exports.NoteController = NoteController;

})(this)
