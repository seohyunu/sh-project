
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 실제로는 서버로 로그인 요청을 보내고, 서버에서 유효성을 확인하는 로직을 구현해야 합니다.
    // 이 예제에서는 간단한 알림창으로 대체합니다.
    alert("로그인 성공!\n아이디: " + username + "\n비밀번호: " + password);
}
