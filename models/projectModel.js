const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema({
    projectname: String,
    projectdesc: String,
    projectimg: String,
    projectlink: String
})

const projectModel = mongoose.model('projectModel', projectSchema)

module.exports = projectModel