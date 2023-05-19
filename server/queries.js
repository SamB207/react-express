require('dotenv').config()

const POOL = require('pg').Pool
const pool = new POOL({
    host: 'localhost',
    user: 'lovec',
    database: 'favlinks',
    password: process.env.POSTGRESS_PASSWORD,
    port: 5432
})

const getLinks = (req, res)=>{
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    }, )
}
const createLink = (req, res) =>{
    const name = req.body.name
    const URL = req.body.URL

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', [name, URL], (error, results)=>{
        if(error){
            throw error;
        }
        res.status(201).send(`Link added`)
    },
    )
}
//update link in the db

//delete link in the db

module.exports ={
    getLinks, createLink
}