const express = require('express');
const cors = require('cors');
const path = require('path'); // Importando o módulo 'path'

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json()); // Necessário para processar os dados JSON no corpo da requisição
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos da pasta 'public'
app.use(cors()); // Permite requisições de outros domínios (CORS)

// Lista para armazenar os itens do carrinho
let carrinho = [];

// Endpoint para adicionar itens ao carrinho
app.post('/adicionar-ao-carrinho', (req, res) => {
    const item = req.body;
    carrinho.push(item);
    res.json({ message: 'Item adicionado ao carrinho!', carrinho });
});

// Endpoint para recuperar os itens do carrinho
app.get('/carrinho', (req, res) => {
    res.json(carrinho);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
