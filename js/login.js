/* login */

let naverLogin = new naver.LoginWithNaverId(
        {
            clientId: "9njxqeI2asAlQ_BNLXuQ",           // 내 애플리케이션 정보에 cliendId를 입력
            callbackUrl: "loginService/login/naver",    // 내 애플리케이션 API 설정의 Callback URL을 입력
            isPopup: false,
            callbackHandle: true
        }
    );
naverLogin.init();



/* join */

function create_id() {
    let id = document.querySelector("#user_id");
    let regex_id = /^[a-zA-z0-9]{4,16}$/;
    
    if (!regex_id.test(id.value)) {
        alert("올바른 아이디가 아닙니다.");
    } else {
        alert("사용 가능한 아이디입니다.");
        const $target = document.querySelector("#register_id");
        $target.disabled = false;
        $target.classList.add("allow_id");
    }
}
