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

        //adress cards
        // console.log(data);
        // listing adresses
            for(let i=0; i<data.adress.length; i++){
                adresses.innerHTML += `<div class="addressCard col-4">
        <div class="nameSelect">
            <div class="name">${data.adress[i]?.addressName}</div>
            <div class="select"><img src="./res/img/icons/done 2.svg" alt=""></div>
        </div>
        <div class="restCard">
        <div class="details">
            <div class="name">${data.adress[i]?.name}</div>
            <div class="city">${data.adress[i]?.country}</div>
            <div class="street">${data.adress[i]?.street}</div>
            <div class="number">${data.adress[i]?.number}</div>
        </div>
        <div class="controls">
            <button class="edit">
                <img src="./res/img/icons/edit-button 1.svg" alt="">
                <div class="editText">Edit</div>
            </button>
            <button class="deleteBtn" name="${data.adress[i]}">
                <img src="./res/img/icons/trash 1.svg" alt="">
                <div class="deleteText">Delete</div>
            </button>
        </div>
        </div>
    </div>`
            }
            let i
            let addNew=document.querySelector(".addNew")
            addNew.addEventListener("click", function(e){
                e.preventDefault()
                // console.log("sd");
                adresses.innerHTML += `<div class="addressCard addedNew col-4">
        <div class="nameSelect">
            <div><input class="addnamepl" type="text" placeholder="Address Name"></div>
        </div>
        <div class="restCard">
        <div class="details">
            <div><input class="addname" type="text" placeholder="Applicant Name"></div>
            <div><input class="addcity" type="text" placeholder="City"></div>
            <div><input class="addstreet" type="text" placeholder="Street"></div>
            <div><input class="addnumber" type="text" placeholder="Contact number"></div>
        </div>
        <div class="controls">
            <button class="confirm">
                <div class="controlText">Confirm</div>
            </button>
        </div>
        </div>
    </div>`
                let addnamepl=document.querySelector(".addnamepl")
                let addname=document.querySelector(".addname")
                let addcity=document.querySelector(".addcity")
                let addstreet=document.querySelector(".addstreet")
                let addnumber=document.querySelector(".addnumber")
                let confirm=document.querySelector(".confirm")
                confirm.addEventListener("click", function(e){
                    e.preventDefault
                    let obj={
                        "addressName": addnamepl.value,
                        "name": addname.value,
                        "country": addcity.value,
                        "street": addstreet.value,
                        "number": addnumber.value
                    }
                    fetch(`${url}${id}`, {
                        method: "Put",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          ...data,
                          adress: [...data.adress, obj]
                        }),
                      })
                    console.log(obj);
                    Swal.fire({
                        icon: 'success',
                        title: 'Address added',
                    })
                    this.parentElement.parentElement.parentElement.remove()
                    adresses.innerHTML += `<div class="addressCard col-4">
                    <div class="nameSelect">
                        <div class="name">${obj.addressName}</div>
                        <div class="select"><img src="./res/img/icons/done 2.svg" alt=""></div>
                    </div>
                    <div class="restCard">
                    <div class="details">
                        <div class="name">${obj.name}</div>
                        <div class="city">${obj.country}</div>
                        <div class="street">${obj.street}</div>
                        <div class="number">${obj.number}</div>
                    </div>
                    <div class="controls">
                        <button class="edit">
                            <img src="./res/img/icons/edit-button 1.svg" alt="">
                            <div class="editText">Edit</div>
                        </button>
                        <button class="deleteBtn">
                            <img src="./res/img/icons/trash 1.svg" alt="">
                            <div class="deleteText">Delete</div>
                        </button>
                    </div>
                    </div>
                </div>`
                }) 
                
            })
        let deleteBtns=document.querySelectorAll(".deleteBtn")
        deleteBtns.forEach((btn)=>{
            btn.addEventListener("click", function(e){
                e.preventDefault()
            // this.parentElement.parentElement.parentElement.remove()
                    // fetch(`${url}${id}/address/`, {
                    //     method: 'Delete'
                    // })
                    console.log(btn.getAttribute("name"));
            })
        })
        let edits=document.querySelectorAll(".edit")
        for (let btn of edits){
           btn.addEventListener("click", function(e){
            console.log("sadasd");
        //     this.parentElement.parentElement.parentElement.innerHTML=`<div class="nameSelect">
        //     <div><input class="addnamepl" type="text" placeholder="Address Name"></div>
        // </div>
        // <div class="restCard">
        // <div class="details">
        //     <div><input class="addname" type="text" placeholder="Applicant Name"></div>
        //     <div><input class="addcity" type="text" placeholder="City"></div>
        //     <div><input class="addstreet" type="text" placeholder="Street"></div>
        //     <div><input class="addnumber" type="text" placeholder="Contact number"></div>
        // </div>
        // <div class="controls">
        //     <button class="confirm">
        //         <div class="controlText">Confirm</div>
        //     </button>
        // </div>
        // </div>`
           })
        }


    //deleting address
       
    })
}


let addNew=document.querySelector(".addNew")
let addNewContent=document.querySelector(".addNewContent")
addNew.addEventListener("click", function(e){
    console.log("work");
})

let adresses=document.querySelector(".adresses")
// fetch(`${url}${id}`).then(res => res.json()).then(data => {
//     console.log(data);
   
// })