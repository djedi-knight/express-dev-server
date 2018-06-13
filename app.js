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
    console.log('Server Request', req)
    res.send('Hello World!')
})

app.listen(5000, function () {
    console.log('Server listening on port 5000')
})

// Setup External URL with ngrok
setupExternalURL()