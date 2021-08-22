// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || 'localhost';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 7000;

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: ['http://localhost:9000', 'http://localhost:8080'],
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2'],
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.post('/crowdfund/fund', (req, res) => {
    // console.log(req.body);
    fetch('http://localhost:9000/crowdfund/fund', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/fund', (req, res) => {
    fetch('http://localhost:9000/crowdfund/fund')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/fund/:id', (req, res) => {
    fetch(`http://localhost:9000/crowdfund/fund/${req.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.post('/crowdfund/investment', (req, res) => {
    // console.log(req.body);
    fetch('http://localhost:9000/crowdfund/investment', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/investment', (req, res) => {
    fetch('http://localhost:9000/crowdfund/investment')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/investment/:id', (req, res) => {
    fetch(`http://localhost:9000/crowdfund/investment/${req.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.post('/crowdfund/claim', (req, res) => {
    // console.log(req.body);
    fetch('http://localhost:9000/crowdfund/claim', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/claim', (req, res) => {
    fetch('http://localhost:9000/crowdfund/claim')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/claim/:id', (req, res) => {
    fetch(`http://localhost:9000/crowdfund/claim/${req.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.post('/crowdfund/reclaim', (req, res) => {
    // console.log(req.body);
    fetch('http://localhost:9000/crowdfund/reclaim', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/reclaim', (req, res) => {
    fetch('http://localhost:9000/crowdfund/reclaim')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/reclaim/:id', (req, res) => {
    fetch(`http://localhost:9000/crowdfund/reclaim/${req.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.post('/crowdfund/closeout', (req, res) => {
    // console.log(req.body);
    fetch('http://localhost:9000/crowdfund/closeout', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/closeout', (req, res) => {
    fetch('http://localhost:9000/crowdfund/closeout')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/crowdfund/closeout/:id', (req, res) => {
    fetch(`http://localhost:9000/crowdfund/closeout/${req.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get('/asset/list', (req, res) => {
    fetch('http://localhost:8080/asset/list')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.listen(7000, () => {
    console.log('server is listening on port 7000');
});