document.getElementById('app').innerHTML = "Howdy!"

function NoteController(noteList){
  noteList.create("Favourite drink: G&T");
  var listView = new ListView(noteList);

  document.getElementById('note').innerHTML = listView.printHTML()
}
