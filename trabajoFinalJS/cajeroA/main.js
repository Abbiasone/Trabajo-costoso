const usuario = 'Mali'
const contraseña = 'main'

const form = document.getElementById('form');
const usuarioInput = document.getElementById('usuario');
const contrasenaInput = document.getElementById('contrasena');
const ingresar = document.getElementById('ingreso');

function handleLogin(event) {
  event.preventDefault(); 

  const username = usuarioInput.value;
  const password = contrasenaInput.value;

  if (username === usuario && password === contraseña) {

    window.location.href = 'countName.html';

    localStorage.setItem('usuario', username)
    localStorage.setItem('contrasena', password)
  } else {

    alert('Usuario o contraseña incorrectos');
  }
}

ingreso.addEventListener('click', handleLogin);



































//const usuario = 'Mali';
//const contrasena = 'main';

//const usuarioIndex = document.getElementById('usuario');
//const contrasenaIndex = document.getElementById('contrasena');
//const botonIniciarSesion = document.getElementById('ingreso');

//botonIniciarSesion.addEventListener('click', function() {
  //const usuarioValor = usuarioIndex.value;
  //const contrasenaValor = contrasenaIndex.value;

  //if (usuarioValor === usuario && contrasenaValor === contrasena) {
   // window.location.href = "http://127.0.0.1:5500/trabajoFinalJS/cajeroA/index2.html"
//  } else {
  //  alert('Usuario o contraseña incorrecta.');
//  }
//  eventpreventDefault
//});






























//const user = document.getElementById(Usuario)
//const contraseña = document.getElementById(Password)

//const usuarios = [
   // {
    //    nombre : "Mali",
    //    contraseña : "malimali"
   // },
  //  {
   //     nombre : "Gera",
   //     contraseña : "gera11",
  //  },
 //   {
  //      nombre : "Maui",
  //      contraseña : "last"
  //  }
//]
    
//const acceso = 

//usuarios.forEach((acceso) => {

//console.log(usuarios)

  //  if(
  //       user === acceso.nombre && contraseña === acceso.contraseña
  //    ){
  //        window.location.href = 'index2.html'
          
  //    }
  //  else{
  //      alert("usuario o contraseña incorrecta")
  //  }
  //  if(
   //     acceso.Usuario === "Gera" && acceso.contraseña === "gera11"

 //    ){
 //        window.location.href = 'index3.html'
 //    }
  //  else{
  //      alert("usuario o contraseña incorrecta")
 //   }
   // if(
     //   acceso.nombre === "Maui" && acceso.contraseña === "last"
  //  ){
  //      window.location.href = "index4.html"
 //   }
//}
//)

//console.log(user)











        
        //formulario = document.getElementById(form)
//console.log(form)
//function login(){
        //const user, password;
        //user = document.getElementById(Usuario).value;
        //password = document.getElementById(password).value;
        //if(
            //user == "Mali" && password == "1234"
        //){
           // window.location.href= "http://127.0.0.1:5500/trabajoFinalJS/cajeroA/index3.html?";
       // }else{
        //    alert("usuario o contraseña incorrecta")
    //    }
//}








//function obtenerListaUsuarios(){
    //var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    //if(listaUsuarios == null){
      //  listaUsuarios = 
       // [
       //    ['1', 'Mali', 'mali11', '1'], 
       //    ['2', 'Gera', 'Gera22', '2'], 
       //    ['3', 'Maui', 'maui33', '3'] 
      //  ]
  //  }
 //   return listaUsuarios;
//}
//function validarDatos(pUsuario , pPassword){
   // const listaUsuarios = obtenerListaUsuarios();
   // const bAcceso = false;

  //  for(const i = 0; i< listaUsuarios.lenght; i++){
   //    if(pUsuario == listaUsuarios[i] [1] && pPassword == listaUsuarios[i][2]){
   //     bAcceso == true;
   //     sessionStorage.setItem('usuario1', listaUsuarios[i] [0] +' '+ listaUsuarios[i][1]);
   //     sessionStorage.setItem('rolUsuario1', listaUsuarios[i][3])
   //    }
  //  }

  //  return bAcceso;

//}
