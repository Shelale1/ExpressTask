const express = require('express')
const res = require('express/lib/response')

const app = express()
app.get('/', (req, res) => {
    res.send('test server')
})
app.get('/test', (req, res) => {
    let obj = {
        name: 'admin',
        user: 'admin',
        id: 1,
        test: false
    }
    res.json(obj)
})

app.get('/employees', (req, res) => {
    let massiv = [
        {
            id: '1',
            name: 'Tom',
            age: '20'
        },
        {
            id: '2',
            name: 'Lara',
            age: '25'


        },
        {
            id: '3',
            name: 'Jack',
            age: '22'


        }



    ]
    res.json(massiv)
})


app.listen(3000, () => {
    console.log('Server started on 3000 port')
})
