function checkSingleNoteViewObjectExists(){

  var singlenoteview = new SingleNoteView();

  try {
    new assert(singlenoteview, 'not defined', 'checkSingleNoteViewObjectExists').isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}


checkSingleNoteViewObjectExists()
