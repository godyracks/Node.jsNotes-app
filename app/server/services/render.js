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
    res.render('saved_note');
}