// script.js (arquivo para a página inicial)
function adicionarAoCarrinho(item) {
    fetch('http://localhost:3000/adicionar-ao-carrinho', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(data => {
        alert('Item adicionado ao carrinho!');
        console.log(data.message); // Mensagem de sucesso
    })
    .catch(error => {
        console.error('Erro ao adicionar item ao carrinho:', error);
    });
}
