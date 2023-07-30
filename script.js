


fetch(`https://randomuser.me/api/?results=20`)
    .then(response => { return response.json() })
    .then(data => {
        let users = [];
        console.log(data);
        users = data.results;
        users
            .splice(2, 10)
            .filter((user) => user.gender === "female")
            .map((user) => {
                console.log(user);
                const dateRegistered = new Date(user.registered.date);
                const today = new Date();
                const dateDiff = today - dateRegistered; // en milliseconds

                document.body.innerHTML +=
                    `<div class="card">
         <div class="container">
          <img src=${user.picture.large} alt="Avatar" style="width:30%">
          <h4 id="gender">${user.gender}</h4>
          <p id="name">${user.name.title} ${user.name.first} ${user.name.last}</p>
          <p id="mail">${user.email}</p >
          <p id="dateI">Inscrit depuis ${Math.floor(
                        dateDiff / (1000 * 60 * 60 * 24)
                    )} jours</p >
         </div >
         </div > `;
            })
    });

    // Correction :
    // ```js
    // let users = [];
    // const app = document.querySelector(".app");
    
    // function getUsers() {
    //   fetch("https://randomuser.me/api/?results=20 ")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       users = data.results;
    //       displayUsers(users);
    //     });
    // }
    
    // function displayUsers(users) {
    //   // users.forEach((user) => console.log(user.name));
    //   // for (let index = 0; index < users.length; index++) {
    //   //     console.log(users[index].name);
    //   // }
    //   // users.map((user) => console.log(user.name));
    //   // console.log(users[0]);
    //   users
    //     .sort((a, b) => {
    //       const today = new Date();
    //       const aRegistered = new Date(a.registered.date);
    //       const bRegistered = new Date(b.registered.date);
    
    //       const aDiff = today - aRegistered;
    //       const bDiff = today - bRegistered;
    
    //       return bDiff - aDiff;
    //     })
    //     // .filter((u) => u.gender === 'female' && u.dob.age < 30)
    //     .map((user) => {
    //       // console.log(user);
    //       const card = document.createElement("div");
    //       card.className = "card";
    
    //       const genderIcon = document.createElement("i");
    //       if (user.gender === "male") {
    //         genderIcon.className = "fa-solid fa-mars male";
    //       } else {
    //         genderIcon.className = "fa-solid fa-venus female";
    //       }
    //       card.appendChild(genderIcon);
    
    //       const img = document.createElement("img");
    //       img.src = `${user.picture.large}`;
    //       card.appendChild(img);
    
    //       const details = document.createElement("div");
    //       details.className = "details";
    
    //       const firstname = document.createElement("span");
    //       firstname.className = "firstname";
    //       firstname.textContent = user.name.first + " ";
    //       details.appendChild(firstname);
    
    //       const lastname = document.createElement("span");
    //       lastname.className = "lastname";
    //       lastname.textContent = user.name.last.toUpperCase();
    //       details.appendChild(lastname);
    
    //       const email = document.createElement("a");
    //       email.className = "email";
    //       email.textContent = user.email;
    //       details.appendChild(email);
    
    //       const registered = document.createElement("div");
    //       registered.className = "registered";
    //       const dateRegistered = new Date(user.registered.date);
    //       const today = new Date();
    //       const dateDiff = today - dateRegistered; // en milliseconds
    
    //       registered.textContent = `Inscrit depuis ${Math.floor(
    //         dateDiff / (1000 * 60 * 60 * 24)
    //       )} jours`;
    //       details.appendChild(registered);
    
    //       card.appendChild(details);
    
    //       app.appendChild(card);
    //     });
    // }
    
    // getUsers();
    // ```
