// temp
document.querySelector("#navbar > .brand").addEventListener("click", () => { location.href = "policy.html"; });


const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");

const $createGroupButton = document.querySelector(".button-create_group");
const $shareLocationAllButton = document.querySelector(".button-share_location_all");


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


function createGroup_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("create_group");
    $modal.innerHTML = `
<p class="modal-header">그룹 생성</p>
<div class="modal-body">
    <div class="input-group_name">
        <input type="text" placeholder="생성할 그룹 이름을 입력하세요">
    </div>
</div>
<ul class="modal-footer">
    <li><button onclick="modalAccept()">생성</button></li>
    <li><button onclick="modalDecline()">취소</button></li>
</ul>`;
}
function shareLocationAll_clickEvent() {
    $icon = document.querySelector(".button-share_location_all > [class^='material-icons']");

    if ($shareLocationAllButton.classList.contains("on")) {
        $shareLocationAllButton.classList.remove("on");
        $icon.className = "material-icons-outlined";
        $icon.innerText = "toggle_off";
    } else {
        $shareLocationAllButton.classList.add("on");
        $icon.className = "material-icons";
        $icon.innerText = "toggle_on";
    }
}

$createGroupButton.addEventListener("click", createGroup_clickEvent);
$shareLocationAllButton.addEventListener("click", shareLocationAll_clickEvent);