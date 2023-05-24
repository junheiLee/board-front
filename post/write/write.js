document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('http://localhost:8080/posts', {
        method: "POST",
        body: formData
    })
    .then(response=> {
        if(!response.ok) {
            throw new Error('게시글 실패');
        }
        return response.json();
    })
    .then(data => {
        const postId = data.postId;
        console.assert(postId);
        window.location.href = "/post/read/" + postId;
    });

    
});
