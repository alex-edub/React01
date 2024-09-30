//obtendo referências aos elementos do formulário
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

//Evento de submissão de formulário
form.addEventListener('submit', function(event){
    event.preventDefault(); //Impede o envio do formulário para o servidor
    const isFormValid= validateForm();

if (isFormValid){
    successMessage.textContent = 'Formulario enviado com sucesso!'
    form.reset(); //Limpa o formulário após envio
}else{
    successMessage.textContent="";
}
});

//Função para validar os campos do formulário
function validateForm(){
    let isValid = true;

    //limpar mensagens de erro
    nameError.textContent="";
    emailError.textContent="";
    messageError.textContent="";
    //Validação do nome (deve ter pelo menos 3 caracteres)
    if (nameInput.value.trim().length<3){
        nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        isValid = false;
    }
    //Validação do e-mail (deve ter @)
    if (!emailInput.value.includes('@')){
        emailError.textContent='Por favor, insira em e-mail válido.';
        isValid=false;
    }
    //Validação da mensagem (Não pode ser vazia)
    if (messageInput.value.trim()===""){
        messageError.textContent='A mensagem não pode estar vazia.';
        isValid=false;
    }
    return isValid
}
