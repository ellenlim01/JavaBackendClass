function login() {
  var loginId = document.getElementById("loginId");
  if (loginId.value === "") {
    alert("로그인을 할 수 없습니다.");
  }
  var loginPw = document.getElementById("loginPw");
  if (loginPw.value === "") {
    alert("로그인을 할 수 없습니다.");
  } else {
    location.href = "main.html";
  }
}

function goBack() {
  history.back();
}

function join() {
  var joinId = document.getElementById("joinId");
  var joinPw1 = document.getElementById("joinPw1");
  var joinPw2 = document.getElementById("joinPw2");
  if (joinId.value === "" || joinPw1.value === "" || joinPw2.value === "") {
    alert("회원가입을 할 수 없습니다.");
  } else {
    if (joinPw1.value !== joinPw2.value) {
      alert("비밀번호를 확인해주세요.");
    } else {
      location.href = "login.html";
    }
  }
}
