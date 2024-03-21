const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const commentSchema = new Schema({
    // 댓글의 내용
    content: {type: String },
    // 댓글이 달린 게시물
    post: { type: Schema.ObjectId, required: true },
    // 댓글 작성자
    user: { type: Schema.ObjectId, required: true, ref: 'User'},
}, {
    timestamps: true,  // 도큐먼트의 생성일과 수정일 필드를 생성한다
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

// 가상 필드

// 보여주기용 날짜
commentSchema.virtual('displayDate').get(function () {
    const displayDate = DateTime
    .fromJSDate(this.createdAt)
    .toLocaleString(DateTime.DATETIME_MED);

    return displayDate;
})

module.exports = mongoose.model('Comment', commentSchema);