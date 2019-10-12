var nombre = prompt("cual es tu nombre?");

function proyecto () {
    if(nombre === "oswaldo"){																	
        document.getElementById('h2').innerText = 'Bienvenido Oswaldo!'
        					
    } else {
        var body = document.body    
        body.style.backgroundColor='black'
        body.innerHTML = '<h1 id="error">ERROR</h1>'
        var error = document.getElementById('error')
        error.style.color = 'red'
        
    }

}

proyecto();
