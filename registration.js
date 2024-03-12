// registration.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '' || email === '') {
            alert('Будь ласка, заповніть всі поля форми.');
            return;
        }

        // Можна додати код для відправлення даних на сервер
        alert('Ви успішно зареєструвалися на уроки нідерландської мови!');
        form.reset();
    });
});
