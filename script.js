let menuVisible = false;


function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

window.onscroll = function () {
    efectoHabilidades();
};


function enviarMensaje() {

    const nombre = document.querySelector('input[name="nombre"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const tema = document.querySelector('input[name="tema"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;


    const data = {
        service_id: 'jona_jqda',
        template_id: 'template_1uh8l1h',
        user_id: 'user_your_sendgrid_user_id', 
        template_params: {
            'nombre': nombre,
            'telefono': telefono,
            'correo': correo,
            'tema': tema,
            'mensaje': mensaje
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensaje enviado con éxito:', data);
     
    })
    .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
     
    });
}