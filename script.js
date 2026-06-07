const menus = document.querySelectorAll('.menu1, .menu2, .menu3, .menu4');
for (const menu of menus){
    menu.onclick = () => {
        if (menu.classList.contains('menu1')) {
            window.location.href = 'index.html';
        } else if (menu.classList.contains('menu2')) {
            window.location.href = 'explore_paths.html';
        } else if (menu.classList.contains('menu3')) {
            window.location.href = 'videos.html';
        } else if (menu.classList.contains('menu4')) {
            window.location.href = 'index.html';
        }
     };
}
