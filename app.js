const ngrok = require('ngrok')

async function setupExternalURL() {
    const url = await ngrok.connect({
        addr: 5000
    })
    console.log('External URL setup at ', url)
}

// Declare inputs
const express = require('express')
const app = express()

// Setup server API
app.get('/', function (req, res) {
    console.log('Server GET Request')
    console.log('route', req.route)
    console.log('headers', req.headers)
    res.send('Server GET Request SUCCESS')
})

app.post('/', function (req, res) {
    console.log('Server POST Request')
    console.log('route', req.route)
    console.log('headers', req.headers)
    res.send('Server POST Request SUCCESS')
})

app.listen(5000, function () {
    console.log('Server listening on port 5000')
})

// Setup External URL with ngrok
setupExternalURL()