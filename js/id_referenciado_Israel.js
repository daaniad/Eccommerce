/**
 * function userInit() {
    let userId = new URLSearchParams(window.location.search).get("id");
    let container = document.getElementById("container");
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let usuario = JSON.parse(this.responseText);

            console.log(usuario);

            container.innerHTML = <p>
            <img src="${usuario.picture}">
        </p>
        <p>
            <b>ID:</b> ${usuario.id}<br/>
            <b>${usuario.title.toUpperCase()}. ${usuario.firstName} ${usuario.lastName}</b><br/>
            <b>Gender:</b> ${usuario.gender}<br/>
            <b>Date of Birth:</b> ${usuario.dateOfBirth}<br/>
            <b>Register Date:</b> ${usuario.registerDate}<br/>
        </p>
        <p>
            <b>Email:</b> ${usuario.email}<br/>
            <b>Phone:</b> ${usuario.phone}</br>
        </p>
        <p>
            <b>Address</b></br>
            <b>State:</b> ${usuario.location.state}<br/>
            <b>Street:</b> ${usuario.location.street}<br/>
            <b>City:</b> ${usuario.location.city}</br>
            <b>Country:</b> ${usuario.location.country}<br/>
            <b>Timezone:</b> ${usuario.location.timezone}<br/>
        </p>
        }
    };

    let url = https://dummyapi.io/data/v1/user/${userId};
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("app-id", "614c809883d7ac75ac446ba1");
    xhttp.send();
}
 */
