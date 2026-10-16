/* 
Objetivo: Quando clicar no botão, o formulário e a máscara.
1 - qual botao clicar?
2 - qual formulário?
3 - qual máscara?
4 - oque é "máscara"?
  - trazer o formulario da essquerda pra direita
  - Centralizar o fomulário na tela
  - Exibir á máscara
*/
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
  formulario.style.left = "50%";
  formulario.style.transform = "translatex(-50%)";
  mascara.style.visibility = "visible";
}

function esconderform() {
  formulario.style.left = "-380px";
  formulario.style.transform = "translatex(0)";
  mascara.style.visibility = "hidden";

}

