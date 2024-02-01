const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const router = express.Router();


router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (isValidUser(email, password)) {
    const token = jwt.sign({ email, role: getUserRole(email) }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid login' });
  }
});

const isValidUser = (email, password) => {
  
  const hashedPassword = hashPassword(password);
  return email === 'user@example.com' && hashedPassword === hashPassword('password');
};

const getUserRole = (email) => {
  return email === 'admin@example.com' ? 'admin' : 'user';
};

const hashPassword = (password) => {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
};

module.exports = router;
