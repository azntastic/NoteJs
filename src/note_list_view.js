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
        // var url = window.location.href
        // url += window.location.href + this.noteListToPrint.list[0].id
        // console.log(url)
        // console.log(element.id)
        printAsHTML += "<li><a href=#notes/" + element.id + " id='note-link'>" + element.showText().substring(0,20) + "</a></li>"
      })
    }
    return "<ul>" + printAsHTML +  "</ul>"
  };

  exports.ListView = ListView;

})(this);
