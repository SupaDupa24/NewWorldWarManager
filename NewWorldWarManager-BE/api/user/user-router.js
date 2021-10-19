const router = require('express').Router();
const Users = require('./user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secret.js');

router.get('/', async (req, res, next) => {

	try {
		const userData = await Users.find();
		res.status(200).json(userData);
	} catch (err) {
		next(err);
	}
})

router.post('/', async (req, res, next) => {
	const data = req.body;

	const hash = bcrypt.hashSync(data.password, 12);
	data.password = hash;

	try {
		const savedData = await Users.addUser(data);
		res.status(201).json(savedData);
	} catch (err) {
		next(err);
	}
});

module.exports = router;