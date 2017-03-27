function Note(string){
  this.text = string
};

Note.prototype.showText = function(){
  return ('text')
};


var note = new Note();
note.showText();
