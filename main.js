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
const navSearchInput = document.getElementById('nav-search-input');
const navSearchButton = document.getElementById('nav-search-button');
const navClearButton = document.getElementById('nav-clear-button');
if (searchInput && searchResult) {
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim().toLowerCase();
        if (!term) {
            searchResult.textContent = '';
            return;
        }
        let matches = recommendations.filter(r => r.toLowerCase().includes(term));
        // detectar pesquisas por templos e por praias (pt/en)
        const isTempleSearch = term.includes('templo') || term.includes('temple') || term.includes('temples');
        const isBeachSearch = term.includes('praia') || term.includes('beach') || term.includes('beaches');
        
        // garantir ao menos duas recomendações de praias quando o termo indicar praias
        if (isBeachSearch) {
            const beachRecs = recommendations.filter(r => {
                const k = r.toLowerCase();
                return k.includes('praia') || k.includes('praias') || k.includes('costa') || k.includes('caribe');
            });
            if (beachRecs.length >= 2) {
                if (matches.length < 2) {
                    matches = beachRecs.slice(0, 2);
                }
            }
        }
        if (isTempleSearch) {
            const templeRecs = recommendations.filter(r => r.toLowerCase().includes('templo') || r.toLowerCase().includes('temple'));
            if (templeRecs.length >= 2) {
                // se a busca não trouxe pelo menos duas, forçamos um par de templos
                if (matches.length < 2) {
                    matches = templeRecs.slice(0, 2);
                }
            }
        }
        // detectar pesquisa por países (pt/en)
        const isCountrySearch = term.includes('pais') || term.includes('country') || term.includes('countries');
        // garantir ao menos duas recomendações de países
        if (isCountrySearch) {
            const countryRecs = recommendations.filter(r => {
                const k = r.toLowerCase();
                return k.includes('país') || k.includes('pais') || k.includes('países') || k.includes('capitais') || k.includes('cidades');
            });
            if (countryRecs.length >= 2) {
                if (matches.length < 2) {
                    matches = countryRecs.slice(0, 2);
                }
            }
        }
        // render visual (texto + imagens quando aplicável)
        function renderRecommendations(list) {
            // mapping de imagens por recomendação (usar imagens da pasta images/)
            const imageMap = {
                'rota dos templos': 'images/templo-1.png',
                'templos zen da ásia': 'images/templo-2.png',
                'templos zen': 'images/templo-2.png',
                'costa rosa': 'images/destaque-costa-rosa.png',
                'praias do caribe': 'images/praia-1.png',
                'praias do caribe (2)': 'images/praia-2.png'
                // country images
                ,'capitais do norte': 'images/pais-1.png',
                'cidades históricas da europa': 'images/pais-2.png'
            };

            // se for busca por templos, renderizar cards com imagens
            if (isTempleSearch || isBeachSearch || isCountrySearch) {
                const container = document.createElement('div');
                container.className = 'search-cards';
                list.forEach((item, idx) => {
                    const card = document.createElement('article');
                    card.className = 'card search-card';
                    const img = document.createElement('img');
                    const key = item.toLowerCase();
                    // escolher imagem por chave; se lista contém apenas um item repetido, escolha imagens diferentes quando possível
                    let src = imageMap[key];
                    if (!src && isBeachSearch) {
                        // fallback rotativo para praias
                        const beachFallback = ['images/praia-1.png','images/praia-2.png','images/praia-3.png'];
                        src = beachFallback[idx % beachFallback.length];
                    }
                    if (!src && isCountrySearch) {
                        const countryFallback = ['images/pais-1.png','images/pais-2.png','images/pais-3.png'];
                        src = countryFallback[idx % countryFallback.length];
                    }
                    if (!src) src = 'images/templo-1.png';
                    img.src = src;
                    img.alt = item;
                    const body = document.createElement('div');
                    body.className = 'card-body';
                    const h3 = document.createElement('h3');
                    h3.textContent = item;
                    body.appendChild(h3);
                    card.appendChild(img);
                    card.appendChild(body);
                    container.appendChild(card);
                });
                searchResult.innerHTML = '';
                searchResult.appendChild(container);
                return;
            }

            // fallback: texto simples
            if (list.length > 0) {
                searchResult.textContent = `Recomendação: ${list.join(', ')}`;
            } else {
                searchResult.textContent = 'Nenhuma recomendação encontrada.';
            }
        }

        renderRecommendations(matches);
    });
}

// conectar o campo de busca na nav ao mesmo comportamento
if (navSearchInput && navSearchButton && navClearButton && searchInput) {
    // sempre sincronizar o valor com o searchInput principal
    navSearchInput.addEventListener('input', () => {
        searchInput.value = navSearchInput.value;
        // disparar evento input no searchInput para reutilizar a lógica
        searchInput.dispatchEvent(new Event('input'));
    });

    navSearchButton.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = navSearchInput.value;
        searchInput.dispatchEvent(new Event('input'));
    });

    navClearButton.addEventListener('click', () => {
        navSearchInput.value = '';
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    });
}