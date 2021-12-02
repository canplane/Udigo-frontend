const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");

const $changeNameButton = document.querySelector("#button-change_name");
const $userWithdrawalButton = document.querySelector("#button-user_withdrawal");


function modalAccept() {
    $body.classList.remove("modal-open");
    $modal.className = "";
    $modal.innerHTML = "";
}
function modalDecline() {
    $body.classList.remove("modal-open");
    $modal.className = "";
    $modal.innerHTML = "";
}


function changeName_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("change_name");
    $modal.innerHTML = `
<p class="modal-header">이름 변경</p>
<div class="modal-body">
    <div class="input-new_name">
        <input type="text" placeholder="새로운 이름을 입력하세요" autofocus">
    </div>
</div>
<ul class="modal-footer">
    <li><button onclick="modalAccept()">변경</button></li>
    <li><button onclick="modalDecline()">취소</button></li>
</ul>`;
}

function userWithdrawal_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("user_withdrawal");
    $modal.innerHTML = `
<p class="modal-header">회원 탈퇴</p>
<ul class="modal-footer">
    <li><button style="color: rgb(237, 92, 94);" onclick="modalAccept()">예</button></li>
    <li><button onclick="modalDecline()">아니오</button></li>
</ul>`;
}

$changeNameButton.addEventListener("click", changeName_clickEvent);
$userWithdrawalButton.addEventListener("click", userWithdrawal_clickEvent);