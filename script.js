document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Impede o envio padrão do formulário para que possamos limpar os campos primeiro
    event.preventDefault();

    // Aqui você pode fazer qualquer ação adicional antes de enviar, se necessário

    // Limpa os campos do formulário
    this.reset();

    // Envia o formulário após limpar
    this.submit();
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icons = document.querySelector(".icons"); // Seleciona os ícones

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icons.classList.toggle("active"); // Alterna a visibilidade dos ícones
});
