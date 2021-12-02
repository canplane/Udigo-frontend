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


function friendRequestNotice_clickEvent() {
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
function groupInvitationNotice_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("receive_group_invitation");
    $modal.innerHTML = `
<p class="modal-header">그룹 초대를 수락하시겠습니까?</p>
<div class="modal-body">
    <div class="group-item" style="background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(resrc/group_image/16.jpg);">
        <p class="name">놀러가자</p>
        <div class="description">
            <div class="num_of_members">
                <span class="material-icons">account_circle</span>
                <p>5명</p>
            </div>
        </div>
    </div>
</div>
<ul class="modal-footer">
    <li><button onclick="modalAccept()">승인</button></li>
    <li><button onclick="modalDecline()">거절</button></li>
</ul>`;
}

$notices[0].addEventListener("click", groupInvitationNotice_clickEvent);
$notices[1].addEventListener("click", friendRequestNotice_clickEvent);