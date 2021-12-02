const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");

const $addFriendButton = document.querySelector(".add_friend-button");


function modalAccept() {
    $body.classList.remove('modal-open');
    $modal.innerHTML = "";
}
function modalDecline() {
    $body.classList.remove('modal-open');
    $modal.innerHTML = "";
}


function noticeClickEvent() {
    $body.classList.add('modal-open');
    $modal.innerHTML = `
<p class="modal-header">ID로 추가</p>
<div class="modal-body">
    <p>사용자 ID를 입력하세요.</p>
    <div style="margin-top: .5rem;">
        <input type="text" style="width: 100%;">
    </div>
</div>
<ul class="modal-footer">
    <li><button onclick="modalAccept()">검색</button></li>
    <li><button onclick="modalDecline()">취소</button></li>
</ul>
`
}
$addFriendButton.addEventListener("click", noticeClickEvent);