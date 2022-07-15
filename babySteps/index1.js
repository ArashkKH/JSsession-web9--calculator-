
document.getElementsByTagName('div')[0].innerText=('Right Text')

// alert('How about now?')

document.getElementsByClassName('classSelect')[0].innerHTML='<strong>Im powerful</strong>'


document.getElementById('idSelect').innerHTML='<p class="d-flex justify-content-center bg-danger">lorem3 not working</p>'



console.log(document.querySelector('.hello>div>p').innerHTML)


document.querySelector('.hello>div>p').innerHTML='<section class="bg-warning">warning!</section>'

console.log(document.querySelector('.hello>div>p').innerHTML)
