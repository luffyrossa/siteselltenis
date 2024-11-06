const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para o carrinho.html
app.get('/carrinho', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'carrinho.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
