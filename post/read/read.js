window.addEventListener('DOMContentLoaded', function() {
    fetch('/post/read/')
    .then(response => response.json())
    .then(data => {
        const title = this.document.getElementById('title');
        content.innerHTML = `<h1>${data.title}</h1>;
        `
        const content = this.document.getElementById('content');
        content.innerHTML ='<p>${data.content}</p>';
    })
    .catch(error => {
        console.error('실패:', error);
    })
});