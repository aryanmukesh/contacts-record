const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const express = require('express');
const path = require('path');
const port = 8000; 
const app = express();

//setting our template engine as ejs
app.set('view engine', 'ejs');
//declaring our views folder as 'views'
app.set('views', path.join(__dirname, 'views'));

contactList = [
    {
        name: "aryan",
        phone: "91920139102"
    },
    {
        name:"ryan",
        phone: "4324324"
    }
];




app.get('/', function(req, res){
    res.render('home', {
        title:"My Contacts",
        contact_list : contactList
    });
});




//listening to port
app.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log(`server running on port ${port}`); 
}); 