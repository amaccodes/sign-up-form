console.log('Hello World!')


const button = document.querySelector('button')
button.addEventListener('click', function() {
    document.querySelector('#input-container').requestSubmit()
})

