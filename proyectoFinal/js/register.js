// register.js

function registerUser(event) {
    event.preventDefault(); 
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const nombreCompleto = document.getElementById('nombre_completo').value;
    const correoElectronico = document.getElementById('correo_electronico').value;
    const contraseña = document.getElementById('contraseña').value;
    const contraseñaConfirmation = document.getElementById('contraseña_confirmation').value;

    const formData = {
        nombre_completo: nombreCompleto,
        correo_electronico: correoElectronico,
        contraseña: contraseña,
        contraseña_confirmation: contraseñaConfirmation
    };

    fetch('http://localhost:/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.errors) {
            console.error(data.errors);
        } else {
            console.log(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
