//criar objetos
// let usuario1 = {
//     nomeCompleto : "Enio Casper",
//     nomeUsuario : "enio",
//     senhaUsuario : "123456",
//     ccUsuario : "sc" 
// }

// let usuario2 = {
//     nomeCompleto : "Danid Silva",
//     nomeUsuario : "danid",
//     senhaUsuario : "123456",
//     ccUsuario : "rj" 
// }



// console.log("NOME DO USUARIO :" + usuario1.nomeCompleto);
// usuario1.nomeCompleto = "Lukas";
// console.log("NOME DO USUARIO :" + usuario1.nomeCompleto);
// usuario1["cpf"] = "12345678900"
// console.log("CPF DO USUARIO :   " + usuario1.cpf);

//LISTA DE USUARIOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Enio Casper",
        nomeUsuario : "enio",
        senhaUsuario : "123456",
        ccuUsuario : "sc"
    },
    {
        nomeCompleto : "Danid Silva",
        nomeUsuario : "danid",
        senhaUsuario : "123456",
        ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Gerson Lima",
        nomeUsuario : "gege",
        senhaUsuario : "123456",
        ccuUsuario : "sp"
    },
    {
        nomeCompleto : "Jorginho Lima",
        nomeUsuario : "jojo",
        senhaUsuario : "123456",
        ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Eduardo Biolante",
        nomeUsuario : "dudu",
        senhaUsuario : "123456",
        ccuUsuario : "sp"
    },

];

//listaDeUsuario.push(usuario1);
//listaDeUsuario.push(usuario2);

const msgStatus = document.querySelector("#msg");
msgStatus.addEventListener("submit", validaFormularioCompleto);
const formLogin = document.querySelector("#frm");
formLogin.addEventListener("submit", validaFormularioCompleto);

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("submit", validaFormularioCompleto);


function validaFormularioCompleto(inputUser, inputPass, selCentroCusto) {
    
    document.getElementById("frm").addEventListener("click", function(formLogin){
        formLogin.preventDefault()
      });
   

    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selCentroCusto = document.querySelector("#idCusto"); 

    console.log(inputUser);
    console.log(inputPass);
    console.log(selCentroCusto);

    //OBJETO USUARIO-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccuUsuario : selCentroCusto.value
    }

    //OBJETO USUARIO-VALIDADO
    let usuarioValidado = {};

    if(usuarioLogado.nomeUsuarioLogado != "" && usuarioLogado.senhaUsuarioLogado != "" && usuarioLogado.ccuUsuario != 0){

        for (let x = 0; x < listaDeUsuarios.length; x++) {

            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario && usuarioLogado.ccuUsuario == listaDeUsuarios[x].ccuUsuario){
                usuarioValidado = listaDeUsuarios[x];
                
                msgStatus.setAttribute("style", "color:#00ff00");
                msgStatus.innerHTML = `<span><strong>0 usuario ${usuarioValidado.nomeCompleto} fez o login com sucesso!</strong></span>`;
            }
            // }else{
            //     msgStatus.setAttribute("style", "color:#ff0000");
            //     msgStatus.innerHTML = `<span><strong>Nome de usuario ou senha invalidos...</strong></span>`;
            // }
        }

    }else{
        console.log("Existe algum campo sem preenchimento")
    }

}

// const form1 = document.querySelector("form[name='frm01']");
// console.log(form1);
// form1.addEventListener("submit", ()=>{
    // const inputUser = document.querySelector("#idNm");
    // const inputPass = document.querySelector("#idPass");
    // const selectCusto = document.querySelector("#idCusto");
    
    // const labelUser = document.querySelector("label[for='idNm']"); QUERYSELECTOR É PARA PEGAR ELEMENTOS NO HTML
    // const labelPass = document.querySelector("label[for='idPass']");

    // let valida = false;

    // valida = validaFormularioCompleto(inputUser, inputPass, selectCusto)

    // if(valida==true){
    //     window.location.assign("index.html");
    // }else{
    //     window.location.assign("login.html");
    // }


// })

inputUser.addEventListener("keyup" , ()=>{
    if(inputUser.value.length < 4){
        labelUser.setAttribute("style", "color:#ff0000")
    }else{
        labelUser.setAttribute("style","color:#00ff00;");
    }
});

inputPass.addEventListener("keyup" ,()=>{

    if(inputPass.value.length < 5){
        labelPass.setAttribute("style","color:#ff0000;");
    }else{
        labelPass.setAttribute("style","color:#00ff00;");
    }
});