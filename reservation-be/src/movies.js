const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.get('/movies', function (req, res, next) {
        db.query(
            'SELECT * FROM movies',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    //Add Movies
    router.post('/movies', (req, res, next) => {
        console.log('req', req)
        db.query(
            'INSERT INTO movies (title, poster, total_seats) VALUES (?,?,?)',
            [req.body.title, req.body.poster, req.body.total_seats],
            (error) => {
                if (error) {
                    console.error('ERROR',error, req);
                    res.status(500).json({ status: error });
                } else {
                    console.log('success')
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    //Update Poster
    router.put('/movies/:id', function (req, res, next) {
        db.query(
            'UPDATE movies SET poster WHERE id=?',
            [req.body.poster, req.body.movie_id],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;