(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.printList = function(){
    return this.list
  }

  //   var a = []
  //
  //   for (var i = 0, len = this.list.length; i < len; i++){
  //      a.push(this.list[i].showText())
  //   }
  //     return a
  // }

  NoteList.prototype.create = function(text){
    var id = this.list.length
    var note = new Note(text, id)
    this.list.push(note)
    }

  exports.NoteList = NoteList;

})(this);
