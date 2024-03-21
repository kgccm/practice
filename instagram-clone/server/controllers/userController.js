const User = require("../models/User");

// 유저 생성
exports.create = async(req, res, next) => {
    try{
        // 유저가 전송한 데이터는 요청 body에 담긴다
        const { email, name, username, password } = req.body;

        // 유저 도큐먼트 생성
        const user = new User();

        user.email = email;
        user.name = name;
        user.username = username;
        user.setPassword(password);   // 비밀번호 암호화

        await user.save();

        res.json({ user });

    } catch (error){
        next(error)
    }
};

// 로그인
exports.login = async(req, res, next) => {
    try{
        // 유저가 로그인 시에 입력한 이메일
        const {email} = req.body;

        // 이메일로 유저 검색
        const _user = await User.findOne({ email });

        // 로그인 토큰 생성
        const access_token = _user.generateJWT();

        // 로그인 유저 프로필 데이터와 로그인 토큰
        const user = {
            username: _user.username,
            name: _user.name,
            avatarUrl: _user.avatarUrl,
            bio: _user.bio,
            access_token
        }

        res.json({ user })      // 서버의 응답

    } catch(error){
        next(error)
    }
};

// 프로필 수정
exports.update = async(req, res, next) => {
    try{
        // req.user: 로그인 유저
        const _user = req.user;

        // 파일 업로드가 있는 경우
        if(req.file){  // req.file: 유저가 업로드한 파일
            _user.avatar = req.file.filename;
        }

        // 이름 수정 요청이 있는 경우
        if ('name' in req.body) {
            _user.name = req.body.name;
        }

        // 자기소개 수정 요청이 있는 경우
        if('bio' in req.body){
            _user.bio = req.body.bio;
        }

        await _user.save();

        // 토큰 재발급
        const user = {
            username: _user.username,
            name: _user.name,
            avatarUrl: _user.avatarUrl,
            bio: _user.bio,
            access_token
        }

        res.json({user})
        
    } catch (error){
        next(error)
    }
};