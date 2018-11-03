import mongoose from 'mongoose'
import { DB } from './env'

mongoose.connect(DB, { useMongoClient: true }, err => {
  if (!err) {
    console.log('Connect To Database -----------------------<')
    return
  }
  console.log(err)
})