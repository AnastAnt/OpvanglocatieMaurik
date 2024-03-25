document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо всі посилання на пункти навігації
    var links = document.querySelectorAll(".sidebar__item a");
    // Знаходимо всі секції основного вмісту
    var sections = document.querySelectorAll("main section");

    // Приховуємо всі секції, окрім першої
    for (var i = 1; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // Додаємо обробник подій для кожного посилання
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Відміняємо стандартну дію посилання

            // Отримуємо ID цільової секції з атрибуту href
            var targetId = this.getAttribute("href").substring(1);
            // Знаходимо цільову секцію
            var targetSection = document.getElementById(targetId);

            // Приховуємо всі секції
            sections.forEach(function(section) {
                section.style.display = "none";
            });

            // Відображаємо тільки цільову секцію
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});

