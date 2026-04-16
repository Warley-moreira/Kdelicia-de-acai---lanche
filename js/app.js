/*sube menu*/
function toggleMenu() {
    document.querySelector('.cabecalho__navegacao').classList.toggle('ativo');
}

// abrir submenu no mobile
document.querySelectorAll('.tem-submenu').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('ativo');
    });
});