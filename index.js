const toggleButton = document.getElementById('butao');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Noturno';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.querySelector('#inicio');
    
    window.addEventListener('scroll', function () {
        const posicao = inicio.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        
        if (posicao < alturaTela) {
            inicio.classList.add('apareça');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelector('#projects');
    
    window.addEventListener('scroll', function () {
        const posicao = projects.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        
        if (posicao < alturaTela) {
            projects.classList.add('apareça');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.querySelector('#inicio');
    
    window.addEventListener('scroll', function () {
        const posicao = inicio.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        
        if (posicao < alturaTela) {
            inicio.classList.add('apareça');
        }
    });
});