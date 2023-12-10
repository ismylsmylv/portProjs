// adding user's name to signin in header
let signIn = document.querySelector(".signIn")
let url = "https://654bcb115b38a59f28efb8ab.mockapi.io/users/"
let id
if (JSON.parse(localStorage.getItem("loginId"))) {
    let id = JSON.parse(localStorage.getItem("loginId"))
    // console.log(id);
    fetch(`${url}${id}`).then(res => res.json()).then(data => {
        // console.log(data);
        let credentials=document.querySelector(".credentials")
        credentials.innerHTML=`
        <div class="imgCredential"><img src="${data.profilePic}" alt=""></div>
                    <div class="details">
                        <div class="username">${data.name}</div>
                        <div class="client">Client code: ${data.id}</div>
                        </div>
                    </div>
        `

        signIn.innerHTML = `<a href="./orders.html">${data.name}</a>`
    })}