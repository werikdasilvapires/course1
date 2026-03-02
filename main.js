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