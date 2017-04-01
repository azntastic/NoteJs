var notelist = new NoteList
notelist.create("Today for breakfast I had green eggs and ham")
notelist.create("I must say I prefer ham over spam")
notelist.create("Unfortunately ham is more spenny than spam")
notelist.create("So I guess I'll just have to eat more spam")

var notecontroller = new NoteController(notelist)

notecontroller.DisplayNotes(document.getElementById('app'))
notecontroller.urlChangeDisplaysNotes()
