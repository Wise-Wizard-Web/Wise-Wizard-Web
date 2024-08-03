document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const href = this.getAttribute('href');
        const targetContent = document.querySelector(href);

        if (targetContent) {
            // Oculta todas las secciones
            document.querySelectorAll('#main, #servicios, #contacto, #portfolio, #biblioteca, #planes, #plan, #login, #registro').forEach(section => {
                section.style.display = 'none';
            });

            // Si el href es #main, muestra #main y #servicios
            if (href === '#main') {
                document.querySelectorAll('#main, #servicios, #contacto, #biblioteca, #planes').forEach(section => {
                    section.style.display = 'flex';
                });
                document.querySelector('#portfolio').style.display = 'grid';
                
            } else {
                // Muestra el contenido objetivo estableciendo display: block (u otro valor adecuado)
                targetContent.style.display = 'flex';
            }
        }
    });
});