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

    window.addEventListener('DOMContentLoaded', function() {
        loadCurruntPost(postId);
      })

    document.getElementById(`postForm`).addEventListener(`submit`, modify);
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

async function loadCurruntPost(postId) {
    const curruntResponse = await fetch(`http://localhost:8080/posts/${postId}`)
    const curruntData = await curruntResponse.json();

    document.getElementsByName("title").value = curruntData.title;
    document.getElementsByName("content").value = curruntData.content;
}

async function modify(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(`http://localhost:8080/posts/${postId}`, {
            method: "PATCH",
            body: formData
    });

    window.location.href = `/post/detail/?postId=${postId}`;
}