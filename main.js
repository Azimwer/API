const userList = document.querySelector(".list");

fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(user => {
        user.data.forEach(item => {
            const newitem = document.createElement("li");
            const newimg = document.createElement("img");
            const newId = document.createElement("p");
            const newEmail = document.createElement("p");
            const newName = document.createElement("p");
            const newLast = document.createElement("p")



            newimg.src = item.avatar;
            newId.textContent = "ID: " + item.id;
            newEmail.textContent = "Email: " + item.email;
            newName.textContent = "Name: " + item.first_name;
            newLast.textContent = "Last Name: " + item.last_name;




            newitem.className = "Item"
            newId.className = "Id"



            newitem.append(newimg, newId, newEmail, newName, newLast);
            userList.appendChild(newitem);

        });

    })