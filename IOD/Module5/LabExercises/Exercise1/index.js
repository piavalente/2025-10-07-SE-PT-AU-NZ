const express = require('express') //loads Express Library

//APP 1
const app = express();
const port = 3000
app.listen(port, () => {
    console.log(`App 1 is listening at http://localhost:${port}`)
})
app.get('/', (req, res) => {
    res.send('Hello App 1')
})

//APP 2
const app2 = express()
const port2 = 3001
app2.listen(port2, () => {
    console.log(`App 2 is listening at http://localhost:${port2}`)
})
app2.get('/', (req, res) => {
    res.send('Hello App 2')
})

//APP 3
const app3 = express()
const port3 = 3002
app3.listen(port3, () => {
    console.log(`App 3 is listening at http://localhost:${port3}`)
})
app3.get('/', (req, res) => {
    res.send('Hello App 3')
})

