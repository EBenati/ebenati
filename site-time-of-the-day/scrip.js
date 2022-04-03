function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  //hora = 6;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "fotomanha.png";
    document.body.style.background = "#438dbf";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = "fototarde.png";
    document.body.style.background = "#ffd992";
  } else {
    // Boa noite!
    img.src = "fotonoite.png";
    document.body.style.background = "#061e22";
  }
}
