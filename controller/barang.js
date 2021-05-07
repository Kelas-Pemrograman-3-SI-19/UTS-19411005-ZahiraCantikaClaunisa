const DataBarangModel = require('../model/barang')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    DataBarangModel.create(data)
    .then(() => {
        resolve ({
            status : true,
            pesan : 'Berhasil Input Data Barang'
        })
    }).catch (() => reject({
        status : false,
        pesan : 'Gagal Input Data Barang'
    }))
})

exports.getAll = () =>
    new Promise((resolve, reject) => {
        DataBarangModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil Menampilkan Seluruh Data Barang',
                result : result
            })
        }).catch(() => reject({
            status : true, 
            pesan : 'Gagal Menampilkan Seluruh Data Barang',
            result : []
        }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        DataBarangModel.findOne({
            _id : objectId(id)
        }).then(result => resolve({
            status : true,
            pesan : 'Berhasil Menampilkan Data Barang',
            result : result
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Menampilkan Data Barang',
            result : null
        }))
    })

    exports.update = (id, data) =>
    new Promise((resolve, reject) => {
        DataBarangModel.updateOne({
            _id: objectId(id)
        }, data).then(() => resolve({
            status : true,
            pesan : 'Berhasil Update Data Barang'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Update Data Barang'
        }))
    })

    exports.delete = (id) =>
    new Promise((resolve, reject) => {
        DataBarangModel.deleteOne({
            _id: objectId(id)
        }).then(() => resolve({
            status : true,
            pesan : 'Berhasi Delete Data Barang'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Delete Data Barang'
        }))
    })