const express = require("express");

const helperFunctions = require("../db");

const router = express.Router();

// router.post('/api/posts', (req, res) => {
//     if(!req.body.title || !req.body.contents){
//         res.status(400).json({ errorMessage: "Please provide title and contents for the post."})
//     } else if( req.body.title === true || req.body.contents === true ) {
//         insert(post);
//         res.status(201);
//         return post;
//     } else {
//         // how to cancel the request???
//         res.status(500).json({ error: "There was an error while saving the post to the database"})
//     }
// })

router.get("/api/posts", (req, res) => {
  helperFunctions
    .find()
    .then(res => {
      res.status(200).json(res.data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

// router.post('/api/posts/:id/comments', (req, res) => {
//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist."})
//     } else if( req.text === null) {
//         // How do you cancel the request?
//         res.status(400).json({ errorMessage: "There was an error while saving the post to the database."})
//     } else {
//         insertComment(comment)
//         res.status(201);
//         return res;
//     }
// })

// // router.get('/api/posts', (req, res) => {

// // })

// router.get('/api/posts/id', (req, res) => {
//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist." })
//     } if(req === null){
//         res.status(500).json({ message: "The post with the specified ID does not exist." })
//     }
// })

// router.get('/api/posts/:id/comments', (req, res) => {
//     if(req === null){
//         res.status(404).json({message: "The post with the specified ID does not exist."})
//     }
// })

// router.delete('/api/posts/:id', (req, res) => {
//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist." })
//     }
// })

// router.put('/api/posts/:id', (req, res) => {
//     const { comment } = req.comment;

//     if(req.id === null){
//         res.status(404).json({ message: "The post with the specified ID does not exist." })
//     } else if(req.body === null || req.contents === null){
//         res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
//     } else if( req === true){

//     }
// })

module.exports = router;
