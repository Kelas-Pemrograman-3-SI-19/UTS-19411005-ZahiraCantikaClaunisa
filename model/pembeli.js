const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const pembeliSchema = new Schema ({
    Nama_Pembeli: {
        type: String
    },
    No_Tlp: {
        type: String
    },
    Alamat: {
        type: String
    }
})

module.exports = mongoose.model ('pembeli', pembeliSchema)