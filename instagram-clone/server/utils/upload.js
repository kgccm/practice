// 파일 처리 미들웨어

const multer = require('multer');
const path = require('path');

// 처리 옵션 구성
const opts = {};

// 파일의 저장경로와 파일이름 생성 옵션
opts.storage = multer.diskStorage({
    // 저장 경로 설정
    destination: (req, file, cb) => {
        // 루트 경로의 files 폴더에 저장한다
        cb(null, `${__dirname}/../files/${file.fieldname}`);
    },

    // 파일 이름 생성
    filename: (req, file, cb) => {
        // 파일의 확장자(extension)
        const extname = path.extname(file.originalname);
        // 파일의 고유한 이름을 생성한다
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)

        cb(null, uniqueSuffix + extname);
    }
})

// 파일 필터 옵션
opts.fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname);
    let isError = false;

    switch (extname){
        case '.jpg':
        case '.jpeg':
        case '.png':
            break;
        default:
            isError = true;
    }

    if(isError){
        const err = new TypeError('Unacceptable type of file');
        err.status = 400;
        return cb(err);
    }
    
    cb(null, true);
}

// 파일 제한 옵션
opts.limits = {fileSize: 1e7}

module.exports = multer((opts))