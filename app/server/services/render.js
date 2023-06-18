const axios = require('axios');


exports.homeRoutes = (req, res) =>{
    
    res.render('index');
}

exports.add_note = (req, res) =>{
    res.render('add_note');
}
exports.edit_note = (req, res) => {
    res.render('edit_note');
}

exports.saved_note = (req,res) =>{
    //make a get request to /api/notes
    axios.get('http://localhost:3000/api/notes')
    .then(function(response){
        
        res.render('saved_note', {usernotes:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
    
}