function exibirusuario() {
    
    var ustr = localStorage.getItem("ulogado");
    if(ustr == null) {
        window.location = "login.html";
    } else {
        var ujson = JSON.parse(ustr);
        document.getElementById("dados").innerHTML = 
        "<h3>Usuario: " + ujson.nome + "<br/>E-mail: " + ujson.email + "</h3>"; 
        document.getElementById("foto").innerHTML = 
        "<img src=imagens/" + ujson.foto + " width=\"200\" height= \"200\" >";
    }
}



function logar() {

    var carta = {
        email: document.getElementById("txtemail").value ,
        senha: document.getElementById("txtsenha").value
    };
    
    var envelope = {
        headers : {
            "content-type" : "application/json"
        },
        method : "post",
        body : JSON.stringify(carta)
    };

    fetch("http://localhost:8080/login", envelope)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("ulogado", JSON.stringify(res));
            window.location = "usuario.html";
        })
        .catch(err => {
            window.alert("E-mail ou senha invalidos");
        });

}