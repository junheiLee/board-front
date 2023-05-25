function goToWriteForm() {
    window.location.href = "/post/write/";
}

async function loadPosts() {
    const response = await fetch(`http://localhost:8080/posts`);
    const dataList = await response.json();
    console.log("dataList={}", dataList);   

    const ulElement = document.getElementById("post-list");

    for(var i=0; i<dataList.length; i++) {
        const dto = JSON.parse(JSON.stringify(dataList[i]));
        
        const liElement = document.createElement('li');
        liElement.textContent = dto.title;
        ulElement.appendChild(liElement);
    }
    
}

loadPosts();