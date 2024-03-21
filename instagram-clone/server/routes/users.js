const express = require('express')
// 라우터
const router = express.Router();
// 유저 컨트롤러
const {
  create,
  login,
  update
} = require("../controllers/userController");
// 회원가입 폼 유효성 검사 미들웨어
const signUpValidator = require('../utils/signUpValidator');
// 로그인 데이터 유효성 검사 미들웨어
const loginValidator = require('../utils/loginValidator');
// 파일 처리 미들웨어
const upload = require('../utils/upload');
// 인증처리 미들웨어
const auth = require('../auth/auth');

// 라우팅

/*
  HTTP 요청 메서드

  1 GET
  데이터 읽기 요청
  2 POST
  데이터 생성 요청
  3 PUT
  데이터 수정 요청
  4 DELETE
  데이터 삭제 요청
*/
// router.HttpRequestMethod(요청주소, 미들웨어. 컨트롤러)
router.post('/', signUpValidator, create);
router.post('/login', loginValidator, login);
router.put('/user', auth, upload.single('avater'), update);

module.exports = router;