var assert = {
  isTrue: function(assertiontocheck){
    if (!assertiontocheck) {
      throw new Error("Assertion failed: " + assertiontocheck + " is not truthy");
    }
    else {
      console.log("Test passed")
    }
  }
};
