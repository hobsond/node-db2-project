const db = require('./knex')
const router = require('express').Router()

router.get('/',(req,res)=>{
    db('cars')
    .then(item=>res.status(200).json(item))
    .catch(()=>res.status(400).json({message:'could not grab cars'}))
})

router.post('/',(req,res)=>{
    const data = req.body
    db('cars')
    .insert(data)
    .then( (item)=>{
        res.status(200).json(item)
    } )
    .catch(()=>res.status(400).json({message:'could not post data to database'}))
})

module.exports = router