(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.printList = function(){

    var a = []

    for (var i = 0, len = this.list.length; i < len; i++){
       a.push(this.list[i].showText())
    }
      return a
  }

  NoteList.prototype.create = function(text){
    var note = new Note(text)
    this.list.push(note)
    }

  exports.NoteList = NoteList;

})(this);
