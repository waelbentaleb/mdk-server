import crypto from 'crypto'
import { User } from '../config/models'

export const shouldSignIn = async (req, res, next) => {
	try {
		if (!req.body.username || !req.body.password)
			return res.status(401).end()

		let user = await User.findOne({ username: req.body.username })

		if (!user) return res.status(401).end()

		if (user.password != req.body.password)
			return res.status(401).end()

		user.token = crypto.createHash('sha256').update(crypto.randomBytes(48).toString('hex')).digest('hex')
		await user.save()

		req.user = user
		req.session.token = user.token

		return next()

	} catch (error) {
		console.log(error)
		return res.status(500).json(error)
	}
}

export const requireAuth = async (req, res, next) => {
	try {
		const user = await User.findOne({ token: req.session.token })

		if (!user)
			if (req.url.includes('/dashboard'))
				return res.redirect('/dashboard/login.html')
			else
				return res.status(401).end()

		req.user = user
		return next()

	} catch (error) {
		console.log(error)
		return res.status(500).json(error)
	}
}
