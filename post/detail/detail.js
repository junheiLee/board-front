const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");


// 삭제 확인
function confirmDelete() {
  var result = confirm("삭제 할거니?");

  if(result) {
    deletePost();
  } else {

  }
}

// 게시글 삭제
async function deletePost() {
  const response = await fetch(`http://localhost:8080/posts/${postId}`, {
    method: "DELETE",
  })

  window.location.href = `/post/`;
}

// 목록으로 돌아가기 버튼
function goToModifyForm() {
  window.location.href = `/post/write/?postId=${postId}`;
}


// 게시글 제목, 내용 작성일 불러오기
async function fetchPostById(postId) {
  
    const response = await fetch(`http://localhost:8080/posts/${postId}`)
    const data = await response.json();
    console.log(data);

    const title = this.document.getElementById(`title`);
    title.innerHTML = `<h1>${data.title}</h1>`;

    const content = this.document.getElementById(`content`);
    content.innerHTML =`<p>${data.content.replaceAll('\r\n', '<br>')}</p>`;

    var date = new Date(data.date);
    const postDate = this.document.getElementById(`post-date`);
    postDate.innerHTML = `작성일: `+ date.toLocaleDateString();

}

window.addEventListener('DOMContentLoaded', function() {
  fetchPostById(postId);
})

// 목록으로 돌아가기 버튼
function goToList() {
  window.location.href = "/post/";
}

