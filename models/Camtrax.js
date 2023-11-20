const mongoose = require('mongoose')

const EkskulSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'id'],
        unique: true,
        index:true
    },

    jenis: {
        type: String,
        required: [true, 'Silahkan isikan jenis ekskul'],
        unique: false
    },

    ruangan: {
        type: String,
        required: [true, 'Silahkan isikan ruangan ekskul'],
        unique: true
    },

    waktu: {
        type: String,
        required: [true, 'Silahkan isikan waktu ekskul'],
        unique: false
    },

    pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan nama pembimbing'],
        unique: false
    },

    peminat: {
        type: String,
        required: [true, 'Silahkan isikan jumlah siswa'],
        unique: true
    },
})

module.exports = mongoose.model('Ekskul', EkskulSchema)