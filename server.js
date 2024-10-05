const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

mongoose.connect("mongodb+srv://rajesh:raj123@cluster0.ds9ab.mongodb.net/").then(
    () => console.log('DB Connection established')
);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;
        let exist = await Registeruser.findOne({ email });
        if (exist) {
            return res.status(400).send('User Already Exist');
        }
        if (password !== confirmpassword) {
            return res.status(400).send('Passwords are not matching');
        }
        let newUser = new Registeruser({
            username,
            email,
            password // Only save the hashed password
        });
        await newUser.save();
        res.status(200).send('Registered Successfully');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let exist = await Registeruser.findOne({ email });
        if (!exist) {
            return res.status(400).send('User Not Found');
        }
        // Compare hashed password
        if (!await bcrypt.compare(password, exist.password)) {
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user: {
                id: exist.id
            }
        };
        jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 }, (err, token) => {
            if (err) throw err;
            return res.json({ token });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

app.get('/myprofile', middleware, async (req, res) => {
    try {
        let exist = await Registeruser.findById(req.user.id);
        if (!exist) {
            return res.status(400).send('User not found');
        }
        res.json(exist);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

app.listen(5000, () => {
    console.log('Server running...');
});
