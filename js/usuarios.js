function inIt(page) {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            const data= response.data;
            let htmlContent = "<ul>";

            for (i = 0; i < data.length; i++) {
                htmlContent += `<li> <a href="/user_details.html"><img src=${data[i].picture}></a> ${data[i].firstName} ${data[i].lastName}`
            }

            let usersDiv = document.getElementById("container")
            usersDiv.innerHTML = htmlContent;

            let pageNumber = "";
            for (i = 0; i < response.total/response.limit; i++) {
                pageNumber += `<li onclick="inIt(${i})" class="page-item"><a class="page-link" href="#">${i+1}</a></li>`
            }
            let buttonsDiv = document.getElementById("pagi");
            buttonsDiv.innerHTML = pageNumber
        }
    }
    request.open("GET" , `https://dummyapi.io/data/v1/user?limit=10&page=${page}`)
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}



// user_details

function userDetail() {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            const htmlContent = `<ul><li>${response.id}</li> 
            <li>${response.title}</li>
            <li>${response.firstName}</li>
            <li>${response.lastName}</li>
            <li><img src= "${response.picture}"></li>
            <li>${response.gender}</li>
            <li>${response.email}</li>
            <li>${response.dateOfBirth}</li>
            <li>${response.phone}</li>
            <li>${response.location.street}</li>
            <li>${response.location.city}</li>
            <li>${response.location.state}</li>
            <li>${response.location.country}</li>
            <li>${response.location.timezone}</li>
            <li>${response.registerDate}</li>
            <li>${response.updateDate}</li></ul>`;


            let usersDiv = document.getElementById("container")
            usersDiv.innerHTML = htmlContent;
        }
    }
    request.open("GET", `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`)
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}

//https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca


function showPosts () {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
    console.log(`estado actual, ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)
        const data = response.data;
        let htmlContent = `<ul>`

        for (i = 0; i < data.length; i++) {
            htmlContent += `<li>${data[i].id}</li>
            <li><img src="${data[i].image}" width = 300px></li>
            <li>${data[i].likes}</li>
            <li>${data[i].tags}</li>
            <li>${data[i].text}</li>
            <li>${data[i].publishDate}</li>
            <li>${data[i].owner.id}</li>
            <li>${data[i].owner.title}</li>
            <li>${data[i].owner.firstName}</li>
            <li>${data[i].owner.lastName}</li>
            <li><img src ="${data[i].owner.picture}"></li>`
            
        }


        let postDiv = document.getElementById('post');
        postDiv.innerHTML = htmlContent
    }
    }
    request.open("GET", `https://dummyapi.io/data/v1/post?limit=10`, true);
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}


function postTags () {
    console.log('Success');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        console.log(`current state ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            let data = response.data;
            let contenido = '<ul>';

            for (i = 0; i < data.length; i++) {
                contenido = contenido + `<li>${data[i].id}</li>
                <li><img src = "${data[i].image}" width = 300px></li>
                <li>${data[i].likes}</li>
                <li>${data[i].tags}</li>
                <li>${data[i].text}</li>
                <li>${data[i].publishDate}</li>
                <li>${data[i].owner.id}</li>
                <li>${data[i].owner.title}</li>
                <li>${data[i].owner.firstName}</li>
                <li>${data[i].owner.lastName}</li>
                <li><img src = "${data[i].owner.picture}" width = 50px></li>`
            }
            let tagDiv = document.getElementById("tags");
            tagDiv.innerHTML = contenido
        }

    }
    request.open("GET", "https://dummyapi.io/data/v1/tag/water/post?limit=10", true)
    request.setRequestHeader ("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}