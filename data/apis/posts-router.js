const express = require('express')

const router = express.Router()

// server.post('/api/posts', (req, res) => {
//     if(!req.body.title || !req.body.contents){
//         res.status(400).json({ errorMessage: "Please provide title and contents for the post."})
//     } else if( req.body.title === true || req.body.contents === true ) {
//         insert(req);
//         res.status(201);
//         return post;
//     } else {
//         // how to cancel the request???
//         res.status(500).json({ error: "There was an error while saving the post to the database"})
//     }
// })

// server.post('/api/posts/:id/comments', (req, res) => {
//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist."})
//     } else if( req.text === null) {
//         // How do you cancel the request?
//         res.status(400).json({ errorMessage: "There was an error while saving the post to the database."})
//     } else {
//         // There is an error while saving the context
//         res.status(201);
//         return res;    
//     }
// })

// server.get('api/posts/id', (req, res) => {
//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist." })
//     } if(req === null){
//         res.status(500).json({ message: "The post with the specified ID does not exist." })
//     }
// })

// server.get('/api/posts/:id/comments', (req, res) => {
    
// })

module.exports = router