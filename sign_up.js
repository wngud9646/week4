function email_check(){
    let id=document.getElementById("id-input").value;

    let mailcheck=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //이메일 정규표현식
    if(id != "" && mailcheck.test(id) === true){ //조건 만족
      document.getElementById('email_valid').innerHTML="올바른 이메일 형식입니다.";
      return true;
    }
    else{               //조건 불만족
      document.getElementById('email_valid').innerHTML="이메일 형식을 확인바랍니다.";
      return false;
    }
}
function password_check(){
    let pass=document.getElementById("password-input").value;

    let check=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(pass != "" && check.test(pass) === true){ //조건 만족
      document.getElementById('password_valid').innerHTML="올바른 비밀번호 형식입니다.";
      return true;
    }
    else{               //조건 불만족
      document.getElementById('password_valid').innerHTML="비밀번호는 최소 8 자, 최소 하나의 문자 및 하나의 숫자입니다.";
      return false;
    }
}
function password_recheck(){
    let pass=document.getElementById("password-input").value;
    let repass=document.getElementById("password-check-input").value;

    if(pass!='' && repass!='') {
      if(pass == repass){
        document.getElementById('password_check_valid').innerHTML="비밀번호가 동일합니다.";
        return true;
      }
      else{
        document.getElementById('password_check_valid').innerHTML="비밀번호가 동일하지 않습니다.";
        return false;
      }
    }
}
function studentnumber_major(){   //학번으로 전공 자동 선택
    let studentnum = document.getElementById("student-number-input").value;
    let checknumber = /^[0-9]{10}$/;

    if(studentnum != "" && checknumber.test(studentnum)){
      document.getElementById('major_valid').innerHTML="";
       let majornum = parseInt(studentnum.substring(4, 7));
       const majorDiv = document.getElementById("major-select");

    switch (majornum){
      case  120:
        majorDiv[0].selected = true;
        break;
      case 136:
        majorDiv[1].selected = true;
        break;
      case 140:
        majorDiv[2].selected = true;
        break;
      case 151:
        majorDiv[3].selected = true;
        break;
      case 174:
        majorDiv[4].selected = true;
        break;
      case 161:
        majorDiv[5].selected = true;
        break;
      case 172:
        majorDiv[6].selected = true;
        break;
      case 180:
        majorDiv[7].selected = true;
        break;
    }
    return true;
  }
    else{
      document.getElementById('major_valid').innerHTML="학번을 확인해주세요";
      return false;
    }
}
function phonenum_check(){
    let numbercheck=/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    let phone=document.getElementById('phoneNumber-input').value;
    if(phone != "" && numbercheck.test(phone)){
        document.getElementById('phonenum_valid').innerHTML="유효한 휴대전화 번호입니다.";
        return true;
    }else{
        document.getElementById('phonenum_valid').innerHTML="유효하지 않은 휴대전화 번호입니다.";
        return false;
    }
}
    function checkAll() {
        let errorcheck = "";

        if (!email_check()) {
            alert("아이디의 이메일 형식을 확인바랍니다!")
            return false;
        }
        if (!password_check()) {
            alert("비밀번호 형식을 확인바랍니다!")
            return false;
        }
        if (!password_recheck()) {
            alert("비밀번호가 일치하는지 확인바랍니다!")
            return false;
        }
        if (!studentnumber_major()) {
            alert("학번이 제대로 입력되었는지 확인바랍니다!")
            return false;
        }
        if(!phonenum_check()){
            alert("휴대전화 번호가 제대로 입력되었는지 확인바랍니다!")
           return false;
        }

        alert("회원가입 성공!")
        return true;
    }
