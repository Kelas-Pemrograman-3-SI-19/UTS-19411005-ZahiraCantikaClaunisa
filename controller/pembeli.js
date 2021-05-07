const DataPembeliModel = require('../model/pembeli')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    DataPembeliModel.create(data)
    .then(() => {
        resolve ({
            status : true,
            pesan : 'Berhasil Input Data Pembeli'
        })
    }).catch (() => reject({
        status : false,
        pesan : 'Gagal Input Data Pembeli'
    }))
})

exports.getAll = () =>
    new Promise((resolve, reject) => {
        DataPembeliModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil Menampilkan Seluruh Data Pembeli',
                result : result
            })
        }).catch(() => reject({
            status : true, 
            pesan : 'Gagal Menampilkan Seluruh Data Pembeli',
            result : []
        }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        DataPembeliModel.findOne({
            _id : objectId(id)
        }).then(result => resolve({
            status : true,
            pesan : 'Berhasil Menampilkan Data Pembeli',
            result : result
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Menampilkan Data Pembeli',
            result : null
        }))
    })

    exports.update = (id, data) =>
    new Promise((resolve, reject) => {
        DataPembeliModel.updateOne({
            _id: objectId(id)
        }, data).then(() => resolve({
            status : true,
            pesan : 'Berhasil Update Data Pembeli'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Update Data Pembeli'
        }))
    })

    exports.delete = (id) =>
    new Promise((resolve, reject) => {
        DataPembeliModel.deleteOne({
            _id: objectId(id)
        }).then(() => resolve({
            status : true,
            pesan : 'Berhasi Delete Data Pembeli'
        })).catch(() => reject({
            status : false,
            pesan : 'Gagal Delete Data Pembeli'
        }))
    })