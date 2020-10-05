//jwt : json web token 
//회원인증 또는 정보교류 시 사용.. 유저가 서버 요청시 jwt 포함하여 전달. 서버는 토큰 유효확인하면됨.
//세션유지할 필요없음 서버 자원 아낄수있다. 
//구조 

//aaaaaa.bbbbbb.cccccc
// 헤더    내용(payload) 서명(sginature)
const header = {
    "typ": "JWT",   // 토큰의 타입 
    "aIg" : "HS256" //해싱 알고리즘 지정 
}


const encodedHeader = new Buffer(JSON.stringify(header))
                            .toString('base64')
                            .replace('=','');

//console.log('header:', encodedHeader)

//payload  정보..
// claim(key&value)들로 구성
/**
 *  1) registered
 *      iss : 토큰 발급자 
 *      sub : 토큰 제목 
 *      aud : 토큰 대상자
 *      exp : 토큰 만료 시간
 *      nbf : notbefore 토큰 활성 날짜와 비슷한 개념. 날짜가 지나기전에 토큰이 처리되지 않는다.
 *      iat : 토큰 발급 시간
 *      jti : 고유 식별자. 중복 방지.
 *  2) public
 *      충돌방지 이름 uri 형식으로 짓는다.
 *      {"http://haedonag.com/is_admin" : true }
 *  3) private
 *      client - server 간사용.. 이름이 중복될 수 있음
 *      {"username":"haedong"}
 */
const payload = {
    "iss": "velopert.com",  //registered
    "exp": "1485270000000",  //registered
    "https://velopert.com/jwt_claims/is_admin": true, //public
    "userId": "11028373727102", //private 
    "username": "velopert"       //private
}

const encodedPayload = new Buffer(JSON.stringify(payload))
                            .toString('base64')
                            .replace('=',''); //base64인코딩 패딩. url-safe하지않으므로 제거되어야함. 디코딩시 문제 X 
                           

//console.log('encodedPayload :', encodedPayload)


/**
 *  서명 
 *  헤더의 인코딩값과 정보의 인코딩갑을 합친후 비밀키로 해쉬하여 생성한다..
 * 
 * HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret)

 */

 const crypto = require('crypto');
 const signature = crypto.createHmac('sha256', 'secret')
                    .update(encodedHeader + "." + encodedPayload)
                    .digest('base64')
                    .replace('=','');


//console.log("signature:", signature);


console.log(encodedHeader+"."+encodedPayload + "." + signature);



//https://jwt.io/

