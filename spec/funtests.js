function assert(subject, message){
this.subject = subject;
this.message = message;

}

assert.prototype.isDefined = function() {
  if(typeof this.subject === "undefined" ) {
    throw new Error("Test failed, " + this.message)
  }
  else {
    console.log("Test passed!")
  };
};
