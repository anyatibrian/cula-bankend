import multer from 'multer'

export const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})
