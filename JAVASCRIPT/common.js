function clkLogin() {
  var txtIdElem = document.getElementById("txtID");
  console.log(txtIdElem.value);
  if (txtIdElem.value === "") {
    alert("로그인을 할 수 없습니다.");
    return;
  }
  var txtPwElem = document.getElementById("txtPw");
  if (txtPwElem.value === "") {
    alert("로그인을 할 수 없습니다2.");
    return; //함수 종료라고 생각
  }
  location.href = "main.html";
}

function join() {
  var pwElem1 = document.getElementById("pw1");
  var pwElem2 = document.getElementById("pw2");

  if (pwElem1.value !== pwElem2.value) {
    alert("비밀번호를 확인해주세요.");
    return;
  }
  location.href = "login.html";
}
