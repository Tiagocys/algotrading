function limparFormulario() {
    // Obtém o formulário pelo ID
    var formulario = document.getElementById("parceiro");

    // Reseta o formulário
    formulario.reset();
}

window.addEventListener('load',limparFormulario)
