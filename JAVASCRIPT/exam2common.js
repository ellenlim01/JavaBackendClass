function clkLogin() {
  var txtIdElem = document.getElementById("txtId");
  if (txtIdElem === "") {
    alert("로그인을 할 수 없습니다.");
    return;
  }
  var txtPwElem = document.getElementById("txtPw");
  if (txtPwElem === "") {
    alert("로그인을 할 수 없습니다.");
    return;
  }
}
