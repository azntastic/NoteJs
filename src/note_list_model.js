(function(exports) {

  function NoteList(){
    this.list = [];
  };


  exports.NoteList = NoteList;

})(this);

NoteList.prototype.printList = function(){
  // console.log(this.list.length)
  // console.log(this.list[0])
  for (var i = 0, len = this.list.length; i < len; i++){
    return this.list[i].showText()
  }

  // this.list.forEach(function(element) {
  // // note.showText();
  // element.showText();
  // });
};
