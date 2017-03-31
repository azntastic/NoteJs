var notelist = new NoteList
notelist.create("Roar")
notelist.create("Woof")
notelist.create("Meow")

var notecontroller = new NoteController(notelist)

notecontroller.DisplayNotes(document.getElementById('app'))
