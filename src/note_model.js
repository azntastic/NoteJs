function Note(string){
  this.text = string
};

Note.prototype.showText = function(){
  return this.text;
};
