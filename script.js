const pupilles = document.getElementsByClassName('ball');

// e = event
document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + '%'
    const y = event.clientY * 100 / window.innerHeight + '%'

    for(let i = 0; i < 2; i++){
        pupilles[i].style.left = x
        pupilles[i].style.top = y
        pupilles[i].style.transform = `translate(-${x}, -${y})`
    }

}













//     
//     const y = `${e.clientY * 100 / window.innerHeight}%`
    
