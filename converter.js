const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')
const filename = 'customer-data.csv'

csv().fromFile(filename).then((response) => {
    const json = JSON.stringify(response, null, 2);
    fs.writeFileSync('customer-data.json', json)
    console.log('Se creo el fichero correctamente!')
}, (error) => {
    console.log('Ocurrio un error!')
})