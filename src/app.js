exports.register = function (req, res) {
    var users = {
        "id": req.body.id,
        "pw": req.body.pw,
        "grade": req.body.grade,
        "name": req.body.name,
    }

    connenction.query('INSERT INTO users SET ?' , users, function (err, res, fields) {
        if (error) {
            console.log("error occured", error);
            res.send({
                "code": 400,
                "failed": "error ocurred",
            })
        } else {
            console.log('Solution: ', results);
            res.send({
                "code": 200,
                "success": "Registered sucessfully"
            });
        }
    });
}


exports.login = function (req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    connenction.query('SELECT * FROM users WHERE id = ?', [id], function( err, res, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                if (results[0].pw === pw) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                } else {
                    res.send({
                        "code": 204,
                        "success": "id doesn't exists"
                    });
                }
            }
        }
    })
}