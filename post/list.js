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
        const linkElement = document.createElement(`a`);
        const divElementTitle = document.createElement(`div`);
        const divElementDate = document.createElement(`div`);
        
        divElementTitle.textContent = dto.title;
        divElementTitle.id=`post-title`;

        var date = new Date(dto.date);
        divElementDate.textContent = date.toLocaleDateString();
        divElementDate.id=`post-date`;

        linkElement.href = `/post/detail/?postId=` + dto.postId;

        linkElement.appendChild(divElementTitle);
        linkElement.appendChild(divElementDate);
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
    }
    
}

loadPosts();