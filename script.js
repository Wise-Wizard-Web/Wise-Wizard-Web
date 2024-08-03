// form al mail gmail //

// Incluir la biblioteca de EmailJS
const script = document.createElement('script');
script.src = 'https://cdn.emailjs.com/dist/email.min.js';
document.head.appendChild(script);

script.onload = function() {
  // Inicializar EmailJS después de que la biblioteca se haya cargado
  emailjs.init('mWajaQ4gVHZmg0XCs'); // Reemplaza "user_12345" con tu User ID de EmailJS

  // Agregar el evento de envío al formulario
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('status');
    if (!status) {
      const statusDiv = document.createElement('div');
      statusDiv.id = 'status';
      this.appendChild(statusDiv);
    }
    document.getElementById('status').innerHTML = "Enviando...";

    emailjs.sendForm('service_www', 'template_www', this)
      .then(function(response) {
        document.getElementById('status').innerHTML = "¡Mensaje enviado con éxito!";
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        document.getElementById('status').innerHTML = "Ocurrió un error al enviar el mensaje.";
        console.log('FAILED...', error);
      });
  });
};

// form al mail gmail //


// ventana superpuesta 
function openCenteredWindow(url, width, height) {
  // Calcular la posición horizontal y vertical para centrar la ventana
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);

  // Abrir la ventana centrada
  window.open(url, 'newwindow', `width=${width}, height=${height}, top=${top}, left=${left}`);
}

// terminos y condiciones

document.getElementById('terms-checkbox').addEventListener('change', function() {
  var buyButton = document.getElementById('buy-button');
  if (this.checked) {
      buyButton.classList.remove('disabled');
      buyButton.removeAttribute('disabled');
  } else {
      buyButton.classList.add('disabled');
      buyButton.setAttribute('disabled', 'true');
  }
});

function openCenteredWindow(url, width, height) {
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  window.open(url, 'popup', `width=${width},height=${height},top=${top},left=${left}`);
  return false;
}