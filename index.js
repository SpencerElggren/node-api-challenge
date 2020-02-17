const express = require('express');
const actionM = require('data/helpers/actionModel');
const projM = require('data/helpers/projectModel');

const server = express();

function validateId(req, res, next) {
    const id = req.params.id;
    if (id) {
        next();
    } else {
        res.status(404);
    }
}



server.get('/api/projects/:id' , validateId, (req, res) => {
    const id = req.params.id;
    projM.get(id).then(r => res.status(200).json(r))
});

server.get('/api/actions/:id', validateId, (req,res) => {
    const id = req.params.id;
    actionM.get(id).then(r => res.status(200).json(r))
});

server.get('/api/projects/:id/actions', validateId, (req, res) => {
    const id = req.params.id;
    projM.getProjectActions(id).then(r => res.status(200).json(r))
});

server.post('/api/projects', (req, res) => {
    const project = req.body;
    projM.insert(project).then(r => console.log(r))
});

server.post('/api/actions', (req, res) => {
    const action = req.body;
    actionM.insert(action).then(r => console.log(r))
});

server.put('/api/projects/:id', validateId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    projM.update(id, changes).then(r => console.log(r))
});

server.put('/api/actions/:id', validateId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    actionM.update(id, changes).then(r => console.log(r))
});

server.delete('/api/projects/:id' , validateId, (req, res) => {
    const id = req.params.id;
    projM.remove(id).then(r => console.log(r))
});

server.delete('/api/actions/:id', validateId, (req, res) => {
    const id = req.params.id;
    actionM.remove(id).then( r => console.log(r))
});