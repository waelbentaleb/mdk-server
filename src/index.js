import { PORT, NODE_ENV, SECRET, PRIVKEY, FULLCHAIN } from './config/env'
import connectMongo from 'connect-mongo'
import session from 'express-session'
import bodyParser from 'body-parser'
import routes from './config/routes'
import mongoose from 'mongoose'
import express from 'express'
import morgan from 'morgan'
import './config/database'
import https from 'https'
import http from 'http'
import path from 'path'
import fs from 'fs'

const app = express()
const mongoStore = connectMongo(session)
const server = NODE_ENV == 'development' ? http.createServer(app) : https.createServer({
    key: fs.readFileSync(PRIVKEY),
    cert: fs.readFileSync(FULLCHAIN)
  }, app)

let sess = {
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24 * 2
    })
}

if (NODE_ENV == 'production')
    sess.cookie.secure = true

app.use(session(sess))
app.use(bodyParser.json({ limit: "4mb" }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/', routes)
app.use('/reports', express.static(path.join(__dirname, '/../public/uploads')));
app.use('/dashboard', express.static(path.join(__dirname, '/../public/dashboard')));

server.listen(PORT, () => console.log('start in ' + NODE_ENV + ' environment on port ' + PORT))
