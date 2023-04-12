function consultarSaldo() {
    const saldoElement = document.getElementById("saldo");
    const saldo = 67;
    saldoElement.innerHTML = saldo;
}

function agregarEfectivo() {
    const ingreso = parseInt(document.getElementById("ingreso").value);
    const saldoActual = parseInt(document.getElementById("saldo").innerHTML);
    const nuevoSaldo = saldoActual + ingreso;
    document.getElementById("saldo").innerHTML = nuevoSaldo;
  }
function
   retiroEfectivo() {
    const retiro = parseInt(document.getElementById("retiro").value);
    const saldoActual = parseInt(document.getElementById("saldo").innerHTML);
    const nuevoSaldo = saldoActual - retiro;

    if (nuevoSaldo < 0 ) {
      const ceroElement = document.getElementById("cero");
      ceroElement.innerHTML = "Saldo insuficiente";
      ceroElement.style.opacity = 1;

      setTimeout( () => { 
        ceroElement.style.opacity = 0;
      }, 2000);

    }else{
        document.getElementById("saldo").innerHTML = nuevoSaldo
    }

    
  }

  const finalizarBtn = document.getElementById('finalizarBtn');
  finalizarBtn.addEventListener('click', function() {
    window.location.href = 'countName.html';
  });
