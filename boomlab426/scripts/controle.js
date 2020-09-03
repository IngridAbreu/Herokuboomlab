function Login(){

    const usuario  = formeuser.usuario.value;
    const senha  = formeuser.senha.value;
  
    if((usuario == "sarluu") && (senha == "1113") ){
  
      window.open('galeria.html');
        
    }
    else {
        alert ("Usuario nao encontrado")
    }
  
  }