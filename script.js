
document.querySelectorAll('header nav ul li a, .btn-Contato a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#") && href.length > 1) {
            e.preventDefault();
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- Envio de formulário de contato ---
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Pega os dados digitados
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const mensagem = document.getElementById("message").value;

    // Aqui usamos EmailJS (serviço gratuito para envio de e-mails sem backend)
    emailjs.send("service_3ooc8v9", "template_s77dnbh", {
        from_name: nome,
        from_email: email,
        celular: celular,
        message: mensagem
    }).then(() => {
        alert("Mensagem enviada com sucesso!");
        document.querySelector("form").reset();
    }).catch(() => {
        alert("Erro ao enviar. Tente novamente.");
    });
});
