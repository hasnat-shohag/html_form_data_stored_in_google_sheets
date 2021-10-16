const scriptURL = 'https://script.google.com/macros/s/AKfycbxqortzL0ZS_1Wc-weabYuC2mPVM4GvJTYd8GPy1LS2BqPD7_HQKIBI_5EdhgcFxCsM/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})
