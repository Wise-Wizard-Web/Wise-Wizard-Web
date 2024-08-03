// PAYPAL

document.addEventListener('DOMContentLoaded', function() {
    // Cargar el script de PayPal dinámicamente
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AeLDmusydx6wK2FUPEGMR_STBS4ieTQnpjSrV523zEr1dqAjbfh6UCiGr0Kx1B4_ouJNnpbIJiu5XDEc&currency=USD";
    script.onload = function() {
        // Botón de PayPal para el Plan Básico
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '100.00', // Monto en USD
                            currency_code: 'USD' // Moneda en USD
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transacción completada por ' + details.payer.name.given_name + '!');
                });
            },
            onError: function(err) {
                console.error('Ocurrió un error durante el proceso de pago:', err);
            }
        }).render('#paypal-button-container');
  
        // Botón de PayPal para el Plan Profesional
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '300.00', // Monto en USD
                            currency_code: 'USD' // Moneda en USD
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transacción completada por ' + details.payer.name.given_name + '!');
                });
            },
            onError: function(err) {
                console.error('Ocurrió un error durante el proceso de pago:', err);
            }
        }).render('#paypal-button-container-2');
  
        // Botón de PayPal para el Plan Premium
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '500.00', // Monto en USD
                            currency_code: 'USD' // Moneda en USD
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transacción completada por ' + details.payer.name.given_name + '!');
                });
            },
            onError: function(err) {
                console.error('Ocurrió un error durante el proceso de pago:', err);
            }
        }).render('#paypal-button-container-3');
    };
    document.head.appendChild(script);
  });
  
  

// botones ocultos de compra

// Function to load and show the section from an external HTML file
function loadSection(placeholderId, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(placeholderId).innerHTML = data;
        const section = document.querySelector(`#${placeholderId} .paypal-button-container`);
        if (section) {
          section.style.display = 'block';
        }
      })
      .catch(error => console.error('Error loading section:', error));
  }
  
  // Event listeners for all 'BUY' links
  document.querySelectorAll('.BUY').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target id
      const placeholderId = `paypal-placeholder-${targetId.charAt(targetId.length - 1)}`; // Construct placeholder id
      const url = targetId + '.html'; // Construct URL for the external HTML file
      loadSection(placeholderId, url); // Load and show the section
    });
  });
  