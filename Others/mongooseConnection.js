const mongoose = require('mongoose')
const config = require('./config.json')

class Handler {

    async Init() {

        mongoose.set('strictQuery', false)
        mongoose.connect(
            config.mongoosePassword)
            .then(x => console.log(`[ Database ] - Başarılı bir şekilde veritaban bağlantısı gerçekleştirildi.`))
            .catch((err) => console.log(`[ Database ] - Veritabanına erişim sağlanamadı.\n[${err}]`))
    }

}

module.exports = new Handler()