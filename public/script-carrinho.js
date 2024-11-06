// script-carrinho.js (arquivo para a página do carrinho)
fetch('http://localhost:3000/carrinho')
    .then(response => response.json())
    .then(carrinho => {
        const container = document.querySelector('.carrinho');
        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrinho');
            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <button>Remover</button>
            `;
            container.appendChild(itemElement);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar itens do carrinho:', error);
    });
    
    function adicionarAoCarrinho(item) {
        fetch('http://localhost:3000/adicionar-ao-carrinho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Mensagem de sucesso
        })
        .catch(error => {
            console.error('Erro ao adicionar item ao carrinho:', error);
        });
    }
    