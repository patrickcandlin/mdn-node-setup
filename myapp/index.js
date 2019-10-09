const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hello Patrick you are learning Node on your own')
})

app.listen(8000, () => {
    console.log('my new app is working on port 8000!')
})