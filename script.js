function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.getElementById('expandLink').addEventListener('click', function () {
    var expandedContent = document.getElementById('expandedContent');
    expandedContent.style.display = (expandedContent.style.display === 'none') ? 'block' : 'none';
});