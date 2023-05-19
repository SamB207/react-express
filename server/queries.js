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
    if(name && URL !== null){
       pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', [name, URL], (error, results)=>{
        if(error){
            throw error;
        }
        res.status(201).send(`Link added`)
    },
    )
    } else{
        response.status(402).send("Server is expecting data")
    }


    
}
//update link in the db
const updateLink =(req, res) =>{
    const id = parseInt(req.params.id)
    const name = req.body.name
    const URL = req.body.URL

    pool.query('UPDATE INTO links (name, URL) VALUE ($1, $2)', [name, URL, id], (error, result)=>{
        if (error){
            throw error
        }
        response.status(200).send(`Update to links`)
    })
}

//delete link in the db
const delLink = (req, res)=>{
    const id = parseInt(req.params.id)
    const name = req.body.name
    const URL = req.body.URL

    pool.query('DELETE FROM links (name, URL) VALUE ($1, $2)', [name, URL, id], (error, result)=>{
        if (error){
            throw error
        }
        response.status(200).send(`Delete from links`)
    })
}
module.exports ={
    getLinks, createLink, delLink, updateLink
}