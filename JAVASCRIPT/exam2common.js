function join() {
  location.href = "join.html";
}

function login() {
  var loginId = document.getElementById("loginId");
  if (loginId.value === "") {
    alert("로그인을 할 수 없습니다.");
  }

  var loginPw = document.getElementById("loginPw");
  if (loginPw.value === "") {
    alert("로그인을 할 수 없습니다.");
  } else {
    location.href = "exam2main.html";
  }
}

function goToBack() {
  history.back();
}

function joinLogin() {
  var joinId = document.getElementById("joinId");
  var joinPw = document.getElementById("joinPw1");
  var joinPw2 = document.getElementById("joinPw2");
  if (joinId.value === "" || joinPw.value === "" || joinPw2.value === "") {
    alert("회원가입을 할 수 없습니다.");
  } else {
    if (joinPw.value !== joinPw2.value) {
      alert("비밀번호를 확인해주세요.");
    } else {
      location.href = "exam2login.html";
    }
  }
}
