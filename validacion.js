//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los campos
        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const asunto = form.querySelector('input[name="asunto"]').value.trim();
        const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

        // Validar los campos
        let valid = true;

        if (nombre === '') {
            showError('input[name="nombre"]', 'El campo nombre es obligatorio.');
            valid = false;
        } else {
            removeError('input[name="nombre"]');
        }

        if (email === '') {
            showError('input[name="email"]', 'El campo email es obligatorio.');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('input[name="email"]', 'El email no es válido.');
            valid = false;
        } else {
            removeError('input[name="email"]');
        }

        if (asunto === '') {
            showError('input[name="asunto"]', 'El campo asunto es obligatorio.');
            valid = false;
        } else {
            removeError('input[name="asunto"]');
        }

        if (mensaje === '') {
            showError('textarea[name="mensaje"]', 'El campo mensaje es obligatorio.');
            valid = false;
        } else {
            removeError('textarea[name="mensaje"]');
        }

        // Si todos los campos son válidos, se puede enviar el formulario
        if (valid) {
            alert('Formulario enviado correctamente.');
            form.submit(); // Envía el formulario
        }
    });

    function showError(selector, message) {
        const element = form.querySelector(selector);
        let error = element.nextElementSibling;

        if (!error || !error.classList.contains('form-error')) {
            error = document.createElement('div');
            error.className = 'form-error';
            element.parentNode.insertBefore(error, element.nextSibling);
        }

        error.textContent = message;
        element.classList.add('form-invalid');
    }

    function removeError(selector) {
        const element = form.querySelector(selector);
        const error = element.nextElementSibling;

        if (error && error.classList.contains('form-error')) {
            error.remove();
        }

        element.classList.remove('form-invalid');
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
