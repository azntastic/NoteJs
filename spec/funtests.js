function assert(subject, message){
this.subject = subject;
this.message = message;

}

assert.prototype.isDefined = function(){
  if(typeof this.subject === "undefined" ) {
    throw new error("assertion failed, " + this.message)
  }
  else {
    console.log("test passed")
}
}
