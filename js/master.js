document.getElementsByTagName('main')[0].addEventListener('mousemove' , (e) =>{
    let r= parseInt(((e.offsetX)/1000)*256)
    let g= parseInt(((e.offsetY)/1000)*256)
    let b = (r+g)/2
    document.getElementsByTagName('main')[0].style.background = 'rgb('+r+','+g+','+b+')'
    document.getElementsByTagName('h1')[0].style.color = '#fff'
})