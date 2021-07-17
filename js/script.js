const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);



    localStorage.setItem(localStorage.length+1, convertData)


    let content = document.getElementById('content')

    let carregando = `<p class="teste">Carregando ...</p>`

    let pronto = `<p class="teste">Pronto</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000);
})

