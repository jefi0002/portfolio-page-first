
let isToggled = false;

document.getElementById('change-back-btn').addEventListener('click', function () {
    if (isToggled) {

        document.body.style.backgroundImage = 'url("Pictures/background-trees.jpg")';

        const textElements = document.querySelectorAll('h1, p, h4, .list, .logo, nav a');
        textElements.forEach(function (element) {
            element.style.color = '';  // Reset
        });
    } else {

        document.body.style.backgroundImage = 'url("Pictures/background-trees-modified.jpg")'; // Corrected URL format

        const textElements = document.querySelectorAll('h1, p, h4, .list, .logo, nav a');
        textElements.forEach(function (element) {
            element.style.color = 'black';
        });
    }

    isToggled = !isToggled;
});
