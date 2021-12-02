const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");

const $notices = document.querySelectorAll(".notice-item");


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


function notice_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("receive_friend_request");
    $modal.innerHTML = `
<p class="modal-header">친구 요청을 수락하시겠습니까?</p>
<div class="modal-body">
    <div class="user-item">
        <div class="image">
            <span class="material-icons">account_circle</span>
        </div>
        <p class="name">박재현</p>
    </div>
</div>
<ul class="modal-footer">
    <li><button onclick="modalAccept()">승인</button></li>
    <li><button onclick="modalDecline()">거절</button></li>
</ul>`;
}
$notices[1].addEventListener("click", notice_clickEvent);