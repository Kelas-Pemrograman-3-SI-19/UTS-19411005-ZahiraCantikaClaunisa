const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const barangSchema = new Schema ({
    Kode_Barang : {
        type: String
    },
    Nama_Barang: {
        type: String
    },
    Deskripsi: {
        type: String
    },
    Harga: {
        type: String
    },
    Stok : {
        type : String
    }
})

module.exports = mongoose.model ('barang', barangSchema)