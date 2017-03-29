(function(exports){

  function NoteController(noteList) {
    noteList.create("Favourite drink: G&T");
    this.listToDisplay = new ListView(noteList);
  };

  NoteController.prototype.DisplayNotes = function() {
    document.getElementById('app').innerHTML = this.listToDisplay.printHTML()
  };

  exports.NoteController = NoteController;

})(this)
