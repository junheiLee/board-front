const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");

async function fetchPostById(postId) {
  
    const response = await fetch(`http://localhost:8080/posts/${postId}`)
    const data = await response.json();
    console.log(data);

    const title = this.document.getElementById(`title`);
    title.innerHTML = `<h1>${data.title}</h1>`;

    const content = this.document.getElementById(`content`);
    content.innerHTML =`<p>${data.content.replaceAll('\r\n', '<br>')}</p>`;
}

function goToList() {
  window.location.href = "/post/";
}

window.addEventListener('DOMContentLoaded', function() {
    fetchPostById(postId);
})