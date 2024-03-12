// language.js
function changeLanguage(lang) {
    // Здійснюємо переадресацію на поточну сторінку з вказаною мовою
    window.location.href = window.location.href + '?lang=' + lang;
}
