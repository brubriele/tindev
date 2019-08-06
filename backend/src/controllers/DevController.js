const axios = require('axios');

module.exports = {
   async store(req, res) {
        // console.log(req.body.username);
        const { username } = req.body

        const response = await axios.get(`https://api.github.com/users/${username}`);

        return res.json(response.data);
    }
};