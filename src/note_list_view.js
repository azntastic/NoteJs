(function(exports) {

  function ListView(noteList) {
    this.noteListToPrint = noteList
  };


  ListView.prototype.printHTML = function () {
    var printAsHTML = ""
    this.noteListToPrint.printList().forEach(function(element){
    printAsHTML += "<li>" + element + "</li>"
    })
    return "<ul>" + printAsHTML +  "</ul>"
  };

  exports.ListView = ListView;

})(this);
