
const express = require('express')
const router = express.Router()

const ekskulcontroller = require('../controllers/camtraxs')

// let ekskuls = [
//     {
//       id: 1, 
//       jenis: "Artificial Intelligence", 
//       ruangan: "A.2.6", 
//       waktu:"13.00 - 14.30", 
//       pembimbing: "Pak Thoriq", 
//       peminat: "10 siswa"
//     },

//     { 
//       id: 2, 
//       jenis: "Paduan Suara", 
//       ruangan: "C.1.2", 
//       waktu:"13.00 - 14.30", 
//       pembimbing: "Bu Gita", 
//       peminat: "20 siswa"
//     },
// ]

router.get('/ekskuls', ekskulcontroller.index)

router.get('/ekskul/:id', ekskulcontroller.show)

router.post('/ekskul', ekskulcontroller.store)

router.put('/ekskul/:id', ekskulcontroller.update)

router.delete('/ekskul/:id', ekskulcontroller.delete)

  module.exports = router