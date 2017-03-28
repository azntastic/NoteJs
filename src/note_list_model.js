(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.printList = function(){
    for (var i = 0, len = this.list.length; i < len; i++){
      return this.list[i].showText()
    }
  }

  NoteList.prototype.create = function(text){
    var note = new Note(text)
    this.list.push(note)
    }

  exports.NoteList = NoteList;

})(this);
