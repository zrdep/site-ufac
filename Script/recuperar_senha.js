document.getElementById('recoveryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Captura os valores dos campos
    const cpf = document.getElementById('cpf').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');

    // Oculta mensagens anteriores
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';

    // Validação básica do protótipo
    if (cpf.length !== 11) {
        errorDiv.textContent = 'Por favor, insira um CPF válido.';
        errorDiv.style.display = 'block';
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.textContent = 'As senhas não coincidem!';
        errorDiv.style.display = 'block';
        return;
    }

    if (password.length < 4) {
        errorDiv.textContent = 'A senha deve ter pelo menos 4 caracteres.';
        errorDiv.style.display = 'block';
        return;
    }

    // Simulação de sucesso
    successDiv.textContent = `Senha alterada com sucesso para o CPF ${cpf}!`;
    successDiv.style.display = 'block';

    // Limpa os campos após o sucesso
    document.getElementById('recoveryForm').reset();
});
