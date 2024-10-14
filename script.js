document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const link = document.getElementById('link').value;
    const code = document.getElementById('code').value;
    const titleList = document.getElementById('titleList');

    // Validar el código de seguridad
    const securityCode = "12345"; // Cambia esto por el código que quieras
    if (code !== securityCode) {
        alert('Código de seguridad incorrecto');
        return;
    }

    // Crear el nuevo elemento de la lista
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}" target="_blank">${title}</a> <button class="remove-btn">X</button>`;

    // Añadir funcionalidad de eliminar
    li.querySelector('.remove-btn').addEventListener('click', function () {
        const confirmCode = prompt('Ingresa el código de seguridad para eliminar:');
        if (confirmCode === securityCode) {
            titleList.removeChild(li);
        } else {
            alert('Código de seguridad incorrecto');
        }
    });

    // Añadir el elemento a la lista
    titleList.appendChild(li);

    // Limpiar el formulario
    document.getElementById('addForm').reset();
});
