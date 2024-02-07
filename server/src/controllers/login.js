const users = require("../utils/users.js");

const login = (req, res) => {
    //* req.query= {email: "mail@.com", password: "1234"}
    const { email, password } = req.query;
    let access = false;

    users.forEach(user => {
        if(user.email === email && user.password === password) 
        access = true;
    });
    //* users.some(callback);
    return res.json({access});
}; 

module.exports = login;

