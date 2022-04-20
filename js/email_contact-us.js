window.addEventListener('load', ()=>{
    var form = document.querySelector("#form");
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var country = document.querySelector("#pais");
    var message = document.querySelector("#mensaje");
    form.addEventListener('submit', function(){
        Email.send({
          Host : "smtp.gmail.com",
          Username : "everituwebdevelopment@gmail.com",
          Password : "7780558e",
          To : 'everituwebdevelopment@gmail.com',
          From : "everituwebdevelopment@gmail.com",
          Subject : "This is the subject",
          Body : "Nombre: "+name.value + "<br>Correo Eléctronico: " + email.value + "<br>Localidad o Número de télefono: " + country.value + "<br>Pedido:<br>" + message.value
      }).then(
        alert("Gracias por comunicarte con VANDERBILT!")
      );
      });
});