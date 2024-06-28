const getUserProfile = (req, res) => {
    res.json({ message: `Welcome, ${req.user}!` });
};

module.exports = {getUserProfile};