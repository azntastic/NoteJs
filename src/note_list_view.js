(function(exports) {

  function ListView(noteList) {
    this.noteListToPrint = noteList
  };


  ListView.prototype.printHTML = function () {
    var printAsHTML = ""
    if (this.noteListToPrint.printList().length == 0) {
      printAsHTML = "No notes found"
    }
    else {
      this.noteListToPrint.printList().forEach(function(element){
        printAsHTML += "<li>" + element + "</li>"
      })
    }
    return "<ul>" + printAsHTML +  "</ul>"
  };

  exports.ListView = ListView;

})(this);
