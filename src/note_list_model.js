(function(exports) {

  function NoteList(){
    this.list = [];
  };


  exports.NoteList = NoteList;

})(this);

NoteList.prototype.printList = function(){
  return this.list;
};
