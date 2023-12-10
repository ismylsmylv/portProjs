// adding user's name to signin in header
let signIn = document.querySelector(".signIn")
let url = "https://654bcb115b38a59f28efb8ab.mockapi.io/users/"
let urlProd = "https://654bcb115b38a59f28efb8ab.mockapi.io/products/";

let id
if (JSON.parse(localStorage.getItem("loginId"))) {
  let id = JSON.parse(localStorage.getItem("loginId"))
  // console.log(id);
  fetch(`${url}${id}`).then(res => res.json()).then(data => {
    // console.log(data);
    let credentials = document.querySelector(".credentials")
    credentials.innerHTML = `
        <div class="imgCredential"><img src="${data.profilePic}" alt=""></div>
                    <div class="details">
                        <div class="username">${data.name}</div>
                        <div class="client">Client code: ${data.id}</div>
                        </div>
                    </div>
        `

    signIn.innerHTML = `<a href="./orders.html">${data.name}</a>`
    let private = document.querySelector(".private")
    if (data.admin) {
      console.log("admin");
      let productSpace = document.querySelector(".productSpace")
      private.remove()
      productSpace.innerHTML = `
            <h1 class="products header">Products</h1>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Material</th>
                <th scope="col">Discount</th>
                <th scope="col">Rating</th>
                <th scope="col">Color</th>
                <th scope="col">Stock</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody class="prods">
            </tbody>
            </table>
            `
      let prods = document.querySelector(".prods")
      fetch(urlProd).then(res => res.json()).then(data => {
        for (let elem of data) {
          prods.innerHTML += `
                    <tr name="${elem.id}">
                      <th scope="row">${elem.id}</th>
                      <td>${elem.name}</td>
                      <td><img src="${elem.avatar}" style=""width=50px"; height="50px"; object-fit="contain""></td>
                      <td>$${elem.price}</td>
                      <td>${elem.categoryFirst}</td>
                      <td>${elem.categorySecond}</td>
                      <td>${elem.discountPercent}%</td>
                      <td>${elem.rating}/5</td>
                      <td>${elem.color}</td>
                      <td>${elem.stock}</td>
                      <td><button type="button" name="${elem.id}" class="btn btn-danger removeApiBtn"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    `
        }
        let removeApiBtns = document.querySelectorAll(".removeApiBtn")
        for (let btn of removeApiBtns) {
          btn.addEventListener("click", function (e) {
            e.preventDefault()
            console.log("delete");
            console.log(this.name);
            this.parentElement.parentElement.remove()
            fetch(`${urlProd}${this.name}`, {
              method: 'Delete'
            })
          })
        }
      })
      //users
      let userSpace = document.querySelector(".userSpace")
      userSpace.innerHTML += `
            <h1 class="products header">Users</h1>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Balance</th>
                <th scope="col">Admin</th>
              </tr>
            </thead>
            <tbody class="users">
            </tbody>
            </table>
            `
      let users = document.querySelector(".users")
      fetch(url).then(res => res.json()).then(data => {
        for (let elem of data) {
          let addCont
          for (let i = 0; i < elem.adress?.length; i++) {
            addCont = []
            addCont.push(`${elem.adress[i]?.name},${elem.adress[i]?.country}, ${elem.adress[i]?.street} street, ${elem.adress[i]?.number}`)
          }

          users.innerHTML += `
                    <tr name="${elem.id}">
                      <th scope="row">${elem.id}</th>
                      <td>${elem.name}</td>
                      <td><img src="${elem.profilePic}" style=""width=50px"; height="50px"; object-fit="contain""></td>
                      <td>${elem.email}</td>
                      <td>${elem.password}</td>
                      <td>${addCont}</td>
                      <td>${elem.balance}</td>
                      <td>${elem.admin}</td>
                      <td><button type="button" name="${elem.id}" class="btn btn-danger removeApiBtnUser"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    `
        }

        let removeApiBtnUsers = document.querySelectorAll(".removeApiBtnUser")
        for (let btn of removeApiBtnUsers) {
          btn.addEventListener("click", function (e) {
            e.preventDefault()
            console.log("delete");
            console.log(this.name);
            this.parentElement.parentElement.remove()
            fetch(`${url}${this.name}`, {
              method: 'Delete'
            })
          })
        }
      })

    }
  })
}

