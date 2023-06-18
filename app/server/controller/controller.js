var userNotes = require('../model/model');
const sanitizeHtml = require('sanitize-html');


//create and save new note
exports.create = (req, res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"});
        return;
    }

    //new note
    const note = new  userNotes({
        title: req.body.title,
        content: req.body.content
    })

    //save note in the database
    note
         .save(note)
         .then(data =>{
            //res.send(data)
            res.redirect('/add-note')
         })
         .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating a note"

            } );
         });

}

exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id; // Retrieve the ID from req.query.id
      userNotes
        .findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Not found note with id=" + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res
            .status(500)
            .send({ message: "Error retrieving notes with id=" + id });
        });
    } else {
      userNotes
        .find()
        .then((notes) => {
          res.send(notes);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error occurred while retrieving notes",
          });
        });
    }
  };
  
//update a new identifies note by noteId
exports.update =(req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Notes to update cannot be empty!"})
    }

    const id = req.params.id;
    userNotes.findByIdAndUpdate(id, req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update note with ${id}. Maybe note not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error update note content!"})
    })

}


// delete a note with a specified noteId
exports.delete = (req, res) => {
    const id = req.params.id;
    userNotes.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete note with ${id}. Maybe the ID is wrong.` });
            } else {
                res.send({ message: "Note deleted successfully." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete note with ID: " + id });
        });
};
