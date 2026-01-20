import React from 'react'
import "./EndPost.css"

const EndPost = () => {
  return (
    <div className="endpost">
      <div className='endpost-logo'>
        <img src="/img/nova.svg" alt="" />
      </div>
      <div className="bold">상담시간 : 오전 10시~오후 5시(토요일, 공휴일 휴무) <br />Email: nova@gmail.com</div>
      <div className="endTxt">노바컴퍼니 사업자 정보 <br />
        상호 Nova Company Inc. <br />
        사업자등록번호 221-79-425 [사업자정보확인] <br />
        대표이사: 나노바<br />
        서울 강서구 초대로77길 41 대동2빌딩 9층<br />
        개인정보 보호책임자: 조노바
      </div>
      <div className="selectTit">
        <p>개인정보처리방침</p>
        <p>|</p>
        <p>회원등급 안내</p>
        <p>|</p>
        <p>이용약관</p>
        <p>|</p>
        <p>이용안내</p>
      </div>
      <div className="copy">Copyright ⓒ NOVA All Right Reserved.</div>
    </div>
  )
}

export default EndPost