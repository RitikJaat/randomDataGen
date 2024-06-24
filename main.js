const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require('./models/Employee')

mongoose.connect('mongodb://127.0.0.1:27017/company')
const port = 3000



app.set('view engine', 'ejs');

const getRand = (arr) => {
    let randValue = Math.floor(Math.random() * (arr.length - 1))
    return arr[randValue]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    
    // generate random data
    let randName = ["Ramu", "Shaymu", "Nandu", "Bandhu"]
    let randLang = ["Desi", "Dehati", "Gawar", "Hindi" ]
    let randCity = ["Gaao se hai budwak", "Gaoo se", "Hum bhi gaao se hi hai", "Village se"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRand(randName),
            salary: Math.floor(Math.random() * 5001),             Language: getRand(randLang),
            City: getRand(randCity),
            isManagar: Math.random() > 0 ? true : false
        })

    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})