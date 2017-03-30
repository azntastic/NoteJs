function checkSingleNoteViewObjectExists(){

  var singlenoteview = new SingleNoteView();

  try {
    new assert(singlenoteview, 'not defined', 'checkSingleNoteViewObjectExists').isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkTakesANoteModel(){

  var note = new Note("howdy")
  var singlenoteview = new SingleNoteView(note);

  try {
    new assert(singlenoteview, 'not defined', 'checkTakesANoteModel').isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
};


function checksForHTMLConversion(){
  var note = new Note("Roar")
  var singlenoteview = new SingleNoteView(note)

  try {
    new assert(singlenoteview.printHTML() === "<ul><li>Roar</li></ul>", 'not printed as html', 'checksForHTMLConversion').isTrue();
  }
  catch(err) {
    console.log(err.message)
  }
};


checkSingleNoteViewObjectExists()
checkTakesANoteModel()
checksForHTMLConversion()
