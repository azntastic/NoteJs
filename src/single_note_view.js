(function(exports){

  function SingleNoteView(note){
    this.note = note
  }

  SingleNoteView.prototype.printHTML = function(){
    return "<ul><li>" + this.note.showText() +  "</li></ul>"
  }

  exports.SingleNoteView = SingleNoteView
})(this)
