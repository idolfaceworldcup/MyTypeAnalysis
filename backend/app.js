const express = require('express')
const app = express()
const helmet = require('helmet')
const bodyParser = require('body-parser')
const compression = require('compression')

app.use(helmet())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())

const indexRouter = require('./routes/index')
const managerAPI = require('./api/manager')

app.use('/', indexRouter)
app.use('/manager', managerAPI)

app.listen(3000, () => {
    console.log('connect!')
})