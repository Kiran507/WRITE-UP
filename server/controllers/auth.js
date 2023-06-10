import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  // CHECK EXISTING USER
  const checkUserQuery = 'SELECT * FROM users WHERE email = ? OR username = ?';

  db.query(checkUserQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json('Internal Server Error');
    }

    if (data.length) {
      return res.status(409).json('User already exists!');
    }

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertUserQuery =
      'INSERT INTO users (`username`, `email`, `password`, `img`) VALUES (?, ?, ?, ?)';

    const values = [req.body.username, req.body.email, hash, req.body.img || null];

    db.query(insertUserQuery, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
      }

      return res.status(200).json('User has been created.');
    });
  });
};


export const login = (req,res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");
    
  });
}

export const logout = (req,res) => {
  
}