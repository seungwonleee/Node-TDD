const express = require('express');
const app = express();
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bek' },
    { id: 3, name: 'Chris' }
]


app.get('/', (rep, res) => {
    res.send('Hellow world');
})

app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10
    const limit = parseInt(req.query.limit, 10)
    if (Number.isNaN(limit)) {
        res.status(400).end();
    } else {
        res.json(users.slice(0, limit))
    }
})

app.get('/users/:id', (req, res) => {
    //id 값을 얻어낸다.
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).end();
    }
    const user = users.filter(user => user.id === id)[0];
    if (!user) { //user === undefined 와 !user 은 동일한 코드
        return res.status(404).end();
    }
    res.json(user);
})



module.exports = app;
