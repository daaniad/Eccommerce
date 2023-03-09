function inIT() {
  console.log("Website loaded successfully!");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    //comprueba el estado de la api, siendo 4 el valor para el estado de RECIBIDO, y de 200 OK en la extensión restful
    if (this.readyState == 4 && this.status == 200) {
      // usamos this para hacer referencia
      //al objeto al que se refiere dentro de la función (this.readyState)
      // que sería igual que poner xhttp.readyState, solo que usamos this
      // para asegurarnos que nos referimos al objeto, ya que varios
      //programadores que trabajen en el mismo proyecto pueden darle nombres
      // diferentes a las variables

      // usamos JSON.parse para transofrmar el texto a formato JSON, y lo metemos en la variable repsonse
      const response = JSON.parse(this.responseText);
      //creamos variable entries para meter el apartado entries (response.entries) del JSON,
      //ya que los datos que hay en "https://api.publicapis.org/entries" son "count" y "entries". Description y Category están en entries.
      const entries = response.entries;
      let htmlContent = "<ul>";

      for (i = 0; i < entries.length; i++) {
        htmlContent += `<li>${entries[i].Description}, ${entries[i].Category}</li>`;
      }

      //creamos entriesDiv (refiriéndonos al div del HTML que vamos a rellenar con la información) y en el paréntesis llamamos al div por su id.
      let entriesDiv = document.getElementById("showEntries");
      // igualamos la variable del div con .innerHTML para modifcar el div del HTML con la variable que hemos creado como contador "htmlContent, mostrando así "
      entriesDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", "https://api.publicapis.org/entries", true);
  //Para autorización de coger datos, primer parámetro es el nombre del header, el segundo el token (value)
  request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
  request.send();
}

function inIt() {
  console.log("Website loaded successfully!");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const productosdestacados = JSON.parse(this.responseText);
      let htmlContent = "<ul><li><span>Malaga</span></li></ul>";

      for (i = 0; i < productosdestacados.length; i++) {
        htmlContent += `<li>
            
            <div class="card-holder">
            <article class="card">
              <figure>
                <img src="/Imágenes/POP/All-Might-no-bg.png" alt="All Might">
              </figure>
              <div class="card-content">
                <h3 class="card-title">${productosdestacados[i].nombre}</h3>
                <div class="price-grp">
                  <span>${productosdestacados[i].precio}</span>
                  <span class="currency">€</span>
                  <span> class
                  <div class="rating">
                    <span class="rate"><span class="rate filled"><i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i></span>
                      <i class="bi bi-star-fill"></i></span>
                  </div>
                </div></li>

                <div class="buttons btn-card">
                <div class="button add-basket">
                  <a href="#">Add to Basket</a>
                </div>
                  <div class="button secondary">
                    <a href="/Details.html?id=${productosdestacados[i].id}">See</a>
                  </div>

                </div>`;
      }

      let entriesDiv = document.getElementById("showEntries");
      entriesDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", `http://127.0.0.1:8000/productosdestacados`, true);

  request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
  request.send();
}

function detalles() {
  console.log("Website loaded successfully!");
  let userId = new URLSearchParams(window.location.search).get("id");
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let htmlContent = `<ul><li>${response.id}</li> 
            <li>${response.nombre}</li>
            <li><img src= "${response.picture}"></li>
            <li>${response.description}</li>`;

      let detalleDiv = document.getElementById("detalle");
      detalleDiv.innerHTML = htmlContent;
    }
  };
  request.open(
    "GET",
    `http://127.0.0.1:8000/productosdestacados/${userId}`,
    true
  );
  request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
  request.send();
}

//login desde api
function logIn() {
  console.log(`Website loaded successfully!`);
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    let success = document.getElementById("success");
    if (this.readyState == 4 && this.status == 200) {
      success.innerHTML = `<span>Logged in successfully<span>`;
    } else if (this.readyState == 4 && this.status == 401) {
      success.innerHTML = `<span>Invalid credentials<span>`;
    }
  };
  let loginEmail = document.getElementById("email").value;
  let loginPass = document.getElementById("pass").value;
  let body = { email: loginEmail, password: loginPass };
  request.open("POST", `http://127.0.0.1:8000/login`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
}

//función local
function detallesAPI() {
  console.log("Website loaded successfully!");
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let htmlContent = "";
      for (i = 0; i < response.length; i++) {
        htmlContent += `<ul><li>${response[i].id}</li> 
              <li>${response[i].nombre}</li>
              <li><img src= "${response[i].picture}"></li>
              <li>${response[i].descripcion}</li></ul>`;
      }

      let detalleDiv = document.getElementById("detalle");
      detalleDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", `http://127.0.0.1:8000/productos`, true);
  request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
  request.send();
}

//Coger productos desde database
function detallesAPIDataBase() {
  console.log("Website loaded successfully!");
  let userId = new URLSearchParams(window.location.search).get("id");
  const request = new XMLHttpRequest();
  let htmlContent = "";
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      htmlContent += `<ul><li>${response[0].id}</li> 
                <li>${response[0].nombre}</li>
                <li><img src= "${response[0].picture}"></li>
                <li>${response[0].descripcion}</li></ul>`;
    }

    let detalleDiv = document.getElementById("detalle");
    detalleDiv.innerHTML = htmlContent;
  };
  request.open("GET", `http://127.0.0.1:8000/productos/${userId}`, true);
  request.send();
}

//login desde database
function logInDataBase() {
  console.log(`Website loaded successfully!`);
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    let success = document.getElementById("success");
    if (this.readyState == 4 && this.status == 200) {
      success.innerHTML = `<span>Logged in successfully<span>`;
    } else if (this.readyState == 4 && this.status == 401) {
      success.innerHTML = `<span>Invalid credentials<span>`;
    }
  };
  let loginEmail = document.getElementById("email").value;
  let loginPass = document.getElementById("pass").value;
  let body = { email: loginEmail, password: loginPass };
  request.open("POST", `http://127.0.0.1:8000/loggin`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
}

function signupDataBase() {
  console.log(`Website loaded successfully!`);
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
    let successSinup = document.getElementById("successSignup");
    if (this.readyState == 4 && this.status == 200) {
      successSinup.innerHTML = `<span>Signup successfully<span>`;
    } else if (this.readyState == 4 && this.status == 400) {
      successSinup.innerHTML = `<span>Invalid credentials<span>`;
    }
  };
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let phone = document.getElementById("phoneNumber").value;
  let emailSignup = document.getElementById("emailSignup").value;
  let passSignup = document.getElementById("passSignup").value;
  let body = {
    nombre: name,
    apellidos: surname,
    email: emailSignup,
    password: passSignup,
    telefono: phone,
  };
  request.open("POST", `http://127.0.0.1:8000/signup`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
}

function payCard() {
  console.log(`Website loaded successfully!`);
  const productoUno = { productoid: "1", cantidad: "1", precio: 20 };
  const productoDos = { productoid: "2", cantidad: "1", precio: 20 };
  let productos = [productoUno, productoDos];
  let total = 0;
  for (p of productos) {
    total += p.precio;
  }

  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);
  };

  let payload = { productos: productos, total: total };
  request.open("POST", `http://127.0.0.1:8000/orders`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(payload));
}

// function productsMongo (){
//   console.log('Website loaded successfully!');
//   const request =  new XMLHttpRequest();
//   request.onreadystatechange = function() {
//       console.log(`estado actual ${this.readyState}`);
//       if (this.readyState == 4 && this.status == 200) {
//         const response = JSON.parse(this.responseText)
//         let htmlContent = `<ul><li>${response[0]._id}</li>
//         <li>${response[0].nombre}</li></ul>`;

//         let detalleDiv = document.getElementById('showEntries');
//         detalleDiv.innerHTML= htmlContent;

//           }

//       }
//   request.open("GET", `http://127.0.0.1:8000/producto`, true);

//   request.send();

//   }

function productsMongo() {
  console.log("Website loaded successfully!");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let htmlContent = "";

      for (i = 0; i < response.length; i++) {
        htmlContent += `<div class="card-holder">
            <article class="card">
              <figure>
                <img src="/Imágenes/POP/All Might no bg.png" alt="All Might">
              </figure>
              <div class="card-content">
                <span class="card-title">${response[i].id}</span>
                <h3 class="card-title">${response[i].nombre}</h3>
                <div class="price-grp">
                  <span>${response[i].precio}</span>
                  <span>Stock ${response[i].stock}</span>
                  <div class="rating">
                    <span class="rate"><span class="rate filled"><i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i></span>
                      <i class="bi bi-star-fill"></i></span>
                  </div>
                </div>
              </div>

              <div class="buttons btn-card">
                <div class="button add-basket">
                  <a href="#">Add to Basket</a>
                </div>
                  <div class="button secondary">
                    <a href="Details.html">See</a>
                  </div>

            </article>
          </div>`;
      }

      let entriesDiv = document.getElementById("showEntries");
      entriesDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", `http://127.0.0.1:8000/producto`, true);
  request.send();
}


function ordersMongo() {
  console.log("Website loaded successfully!");
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let htmlContent = "";

      for (i = 0; i < response.length; i++) {
        htmlContent += `<div class="card-holder">
            <article class="card">
              <figure>
                <img src="/Imágenes/POP/All Might no bg.png" alt="All Might">
              </figure>
              <div class="card-content">
                <span class="card-title">${response[i].usuario[0].nombre}</span>
                <h3 class="card-title">${response[i].nombre}</h3>
                <div class="price-grp">
                  <span>${response[i].total}</span>
                  <span>Stock ${response[i].stock}</span>
                  <div class="rating">
                    <span class="rate"><span class="rate filled"><i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i></span>
                      <i class="bi bi-star-fill"></i></span>
                  </div>
                </div>
              </div>

              <div class="buttons btn-card">
                <div class="button add-basket">
                  <a href="#">Add to Basket</a>
                </div>
                  <div class="button secondary">
                    <a href="Details.html">See</a>
                  </div>

            </article>
          </div>`;
      }

      let entriesDiv = document.getElementById("showEntries");
      entriesDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", `http://127.0.0.1:8000/pedido`, true);
  request.send();
}








  function productoDestacados() {
    console.log("Website loaded successfully!");
      console.log(`estado actual ${this.readyState}`);
  
    fetch("http://localhost:8000/productodestacados")
    .then((response) => {
       return response.json();
    }).then((data) => {
        let htmlContent = "";
  
        for (i = 0; i < data.length; i++) {
          htmlContent += `<div class="card-holder">
              <article class="card">
                <figure>
                  <img src="/Imágenes/POP/All Might no bg.png" alt="All Might">
                </figure>
                <div class="card-content">
                  <span class="card-title">${data[i].id}</span>
                  <h3 class="card-title">${data[i].nombre}</h3>
                  <div class="price-grp">
                    <span>${data[i].precio}</span>
                    <span>Stock ${data[i].stock}</span>
                    <div class="rating">
                      <span class="rate"><span class="rate filled"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i></span>
                        <i class="bi bi-star-fill"></i></span>
                    </div>
                  </div>
                </div>
  
                <div class="buttons btn-card">
                  <div class="button add-basket">
                    <a href="#">Add to Basket</a>
                  </div>
                    <div class="button secondary">
                      <a href="Details.html">See</a>
                    </div>
  
              </article>
            </div>`;
        }
        let entriesDiv = document.getElementById("showEntries");
        entriesDiv.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.log(error);
  
        
    });
    };



    function logInDataBases() {
      console.log(`Website loaded successfully!`);
      let loginEmail = document.getElementById("email").value;
      let loginPass = document.getElementById("pass").value;
      let body = { email: loginEmail, password: loginPass };
      
        console.log(`estado actual ${this.readyState}`);
        let success = document.getElementById("success");
        fetch("http://localhost:8000/loginfetch", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        
        
    }).then((response) => {
        console.log(response.status);
        if (response.status == 401) {
          throw "not authorised";
        }
    }).then((ok) => {
        console.log(ok);
        success.innerHTML = `<span>Logged in successfully<span>`;
    }).catch((error) => {
        console.log(error);
        success.innerHTML = `<span>Invalid credentials<span>`;
    });
        
      
        
    }
    
    //Fetch POST
    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.length);
    }).catch((error) => {
        console.log(error);
    });

  

    //Fetch es igual que la async function de abajo
 
    fetch("http://localhost:8000/productos%22")
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.length);
    }).catch((error) => {
        console.log(error);
    });


    //Igual que fetch
    async function obtenerProductos() {
    try {
        let response = await fetch("http://localhost:8000/productos%22");
        let data = await response.json();

        console.log(data.length);

        return data;
    } catch (error) {
        console.log(error);
    }
}

  // Fetch





/*let url = "http://localhost:8080/crearusuariopost";
    
    const data = {
        "usuario": nombreUsuario,
        "apellidos": apellidosUsuario,
        "password": passwordUsuario
    } 

//XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
    
    
    // Fetch
    const request = fetch("http://localhost:8080/crearusuariopost");
    request.then(function(pedidos) {
       pedidos.forEach(function(pedido) {

       });
    }).catch(function(error) {
        console.log(error);
    });
    */