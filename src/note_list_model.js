(function(exports) {

  function NoteList(){
    this.list = [];
  };


  exports.NoteList = NoteList;

})(this);

NoteList.prototype.printList = function(){
  this.list.forEach(function(note) {
  // note.showText();
  console.log(note.showText());
  });
};
