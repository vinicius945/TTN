document.getElementById('confirm').addEventListener('click', function() {
    const senhaInput = document.getElementById('senha').value.toLowerCase();
    const senhaCorreta = 'pavv';

    if (senhaInput === senhaCorreta) {
        window.location.href = '../html/sucess.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});