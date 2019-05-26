const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    // res.json({posts: {title: 'my first post', description: 'random data you shouldnt access'}});
    
    // Al tener el id del usuario podriamos buscarlo en la base de datos y hacer operaciones en base a ese usuario
    res.send(req.user);
    
});


module.exports = router;