// document.getElementsByTagName('div')[0].classList.add('redfont')


document.querySelector('div:nth-child(1)').classList.add('redfont','general')
document.querySelector('div:nth-child(3)').classList.add('redfont','general')
document.querySelector('div:nth-child(2)').classList.add('bigfont','general')
document.querySelector('div:nth-child(4)').classList.add('bigfont','general')

// -----------------

let _span = document.createElement('span')
_span.innerHTML='im a span :)'



// ???
document.getElementsByClassName('tst')[0].appendChild(_span)
document.getElementsByClassName('tst')[1].appendChild(_span)
document.getElementsByClassName('tst')[2].appendChild(_span)
// ???