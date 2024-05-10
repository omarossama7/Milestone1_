const jwt = require('jsonwebtoken');
const users = [];  // This should be replaced with a real database

exports.registerUser = (req, res) => {
    const { name, password } = req.body;
    const userExists = users.find(user => user.name === name);
    if (userExists) return res.status(400).send('User already exists');

    const newUser = { name, password };  // Hash password in real scenario
    users.push(newUser);
    res.status(201).send('User registered');
};

exports.loginUser = (req, res) => {
    const { name, password } = req.body;
    const user = users.find(user => user.name === name && user.password === password);
    if (!user) return res.status(401).send('Invalid credentials');

    const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ accessToken });
};
