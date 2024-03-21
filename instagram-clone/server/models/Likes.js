const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const likesSchema = new Schema({
    // 좋아요 한 유저
    user: { type : Schema.ObjectId, required: true },
    // 좋아요 한 게시물
    post: { type : Schema.ObjectId, required: true}
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

module.exports = mongoose.model('Lieks', likesSchema);