const { Router } = require('express');
const dbConnection = require('../../boot/startDatabase');


const router = Router();

router.get("/Clients", (req, res) => {
    if (req.params.filter) {
        
    }
    dbConnection.query('SELECT * FROM clients', (err, result) => {
        if (err) {
            res.status
        }
        res.json(result.rows);
    });
});
