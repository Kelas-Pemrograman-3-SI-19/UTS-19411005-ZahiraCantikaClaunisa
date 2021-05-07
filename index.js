const express = require('express')
const app = express()
const mongoose = require('mongoose')

//untuk konek ke database
mongoose.connect('mongodb://localhost:27017/penjualan', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Berhasil Konek ke Database'))
.catch((err) => console.log('Gagal konek ke Database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/barang', require('./routes/barang'))
app.use('/pembeli', require('./routes/pembeli'))

app.listen(3000, () => {
    console.log('server started')
})