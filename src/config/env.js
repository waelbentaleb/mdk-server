export const NODE_ENV = process.env.NODE_ENV || 'development'
export const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/mdk'
export const PORT = process.env.PORT || NODE_ENV == 'development' ? 3000 : 443
export const SECRET = process.env.SECRET || 'pHIdBV@zzQRfizz^eptpVBjzn7U0uP'
export const PRIVKEY = process.env.PRIVKEY
export const FULLCHAIN = process.env.FULLCHAIN