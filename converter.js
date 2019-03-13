const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')
const filename = 'customer-data.csv'

csv().fromFile(filename).then((response) => {
    const json = JSON.stringify(response);
    fs.writeFileSync('customer-data.json', json)
    console.log('Se creo el fichero correctamente!')
}, (error) => {
    console.log('Ocurrio un error!')
})