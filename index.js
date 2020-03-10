const express = require('express');
const server = require('./data/apis/server')

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
