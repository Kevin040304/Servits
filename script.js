function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirmarContrasena = document.getElementById('confirmarContrasena').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || contrasena === '' || confirmarContrasena === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden. Inténtalo de nuevo.');
      return false;
    }

    // Si todo está bien, puedes enviar el formulario
    alert('¡Formulario enviado correctamente!');
    return true;
  }