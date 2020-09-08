const {User} = require('../../models');

export const login = (req, res) => {
    console.log(User.findAll());
}