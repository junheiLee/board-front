const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");

const pageTitle = document.getElementById("pageTitle");
const heading = document.getElementById("heading");

if(postId == null) {
    pageTitle.textContent = "등록";
    heading.textContent = "등록";

    document.getElementById(`postForm`).addEventListener(`submit`, regist);

} else {
    pageTitle.textContent = "수정";
    heading.textContent = "수정";
}

async function regist(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(`http://localhost:8080/posts`, {
            method: "POST",
            body: formData
    });

    const data = await response.json();
    const postId = data.postId;

    window.location.href = `/post/detail/?postId=${postId}`;

}

