function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

//made changes in mediaquery
// document.getElementById('expandLink').addEventListener('click', function () {
//     var expandedContent = document.getElementById('expandedContent');
//     expandedContent.style.display = (expandedContent.style.display === 'none') ? 'block' : 'none';
// });

function showParagraph(projectId) {
    // Hide all paragraphs
    var paragraphs = document.querySelectorAll('.hidden');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none';
    });

    // Show the selected paragraph
    var selectedParagraph = document.getElementById(projectId);
    selectedParagraph.style.display = 'block';
}