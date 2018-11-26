import multer from 'multer'
import path from 'path'
import fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = '/root/public/uploads/' + req.params.computerId

    if (!fs.existsSync(dir))
      fs.mkdirSync(dir, err => cb(err, dir))

    cb(null, path.join(__dirname, '/../../public/uploads/' + req.params.computerId))
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})

const upload = multer({
  storage: storage
}).array('file')

export default async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }

    return next()
  })
}