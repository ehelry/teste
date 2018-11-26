// @author: Elvis Helry

document.getElementById('toggle-menu').addEventListener('click', function () {
    var menu = document.getElementById("menu-principal");
    if (this.classList.contains('clicked')) {
        this.classList.remove('clicked');
        menu.style.display = "none";

    } else {
        this.classList.add('clicked');
        menu.style.display = "block";

    }
  });