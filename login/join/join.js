document.getElementById(`joinForm`).addEventListener(`submit`, regist);

async function regist(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(`http://localhost:8080/members`, {
            method: "POST",
            body: formData
    });

    window.location.href = `/login/`;

}