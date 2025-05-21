document.addEventListener("DOMContentLoaded", function () {

    function setActiveLink() {
        const sections = document.querySelectorAll('#about, #skills, #projects, #experience');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();

    window.addEventListener('scroll', setActiveLink);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
        
    });
});