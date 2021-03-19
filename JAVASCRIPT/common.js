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
