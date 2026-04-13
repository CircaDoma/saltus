const navbar = document.getElementById('navbar')

function openSettings(){
    settings.classList.add('show')
}

function closeSettings(){
    settings.classList.remove('show')
}

function openInfo() {
    info.classList.add('show');
    infoBackdrop.classlist.add('show');
    document.body.style.overflow = 'hidden';
}

function closeInfo() {
    info.classList.remove('show');
    infoBackdrop.classlist.remove('show');
    document.body.style.overflow = '';
}