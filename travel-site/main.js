// simples script para captura de contato
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        document.getElementById('message').textContent = `Obrigado! Enviaremos novidades para ${email}.`;
        form.reset();
    });
}

// funcionalidade de busca simples
const recommendations = [
    'Costa Rosa',
    'Rota dos Templos',
    'Capitais do Norte',
    'Praias do Caribe',
    'Templos Zen da Ásia',
    'Cidades Históricas da Europa'
];

const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
if (searchInput && searchResult) {
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim().toLowerCase();
        if (!term) {
            searchResult.textContent = '';
            return;
        }
        const matches = recommendations.filter(r => r.toLowerCase().includes(term));
        if (matches.length > 0) {
            searchResult.textContent = `Recomendação: ${matches.join(', ')}`;
        } else {
            searchResult.textContent = 'Nenhuma recomendação encontrada.';
        }
    });
}