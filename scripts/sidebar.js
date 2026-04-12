const navbar = document.getElementById('navbar')

function openSettings(){
    settings.classList.add('show')
}

function closeSettings(){
    settings.classList.remove('show')
}

function openInfo() {
    info.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeInfo() {
    info.classList.remove('show');
    document.body.style.overflow = '';
}