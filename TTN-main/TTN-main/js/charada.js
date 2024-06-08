document.getElementById('confirm').addEventListener('click', function() {
    const item1 = document.getElementById('item1').value.toLowerCase();
    const item2 = document.getElementById('item2').value.toLowerCase();
    const item3 = document.getElementById('item3').value.toLowerCase();
    const item4 = document.getElementById('item4').value.toLowerCase();

    if (item1 === 'papel' &&
        (item2 === 'amarelo' || item2 === 'amarela') &&
        item3 === 'vidro' &&
        (item4 === 'vermelho' || item4 === 'vermelha')) {
        window.location.href = '../html/senha.html';
    } else {
        alert('Erro. Tente novamente.');
    }
});