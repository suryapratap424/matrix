let r = document.getElementById('r')
let c = document.getElementById('c')
var fill1 = document.getElementById('fill1')
var fill2 = document.getElementById('fill2')
r.addEventListener('input',()=>{
    fill1.click();
    fill2.click();
})
c.addEventListener('input',()=>{
    let m = document.getElementsByClassName('matrix')
    for (let i = 0; i < m.length; i++) {
        const element = m[i];
        element.style.gridTemplateColumns = `repeat(${c.value},1fr)`
    }
    fill1.click();
    fill2.click();
})
let m1 = document.getElementById('m1')
fill1.addEventListener('click',()=>{ 
    let row = r.value;
    let col = c.value;
    m1.innerHTML=''
    for (let i = 0; i < row*col; i++) {
        let p = document.createElement('p')
        p.innerHTML=Math.floor(Math.random()*11)
        p.id='m1_'+i
        m1.appendChild(p)
    }
})
let m2 = document.getElementById('m2')
fill2.addEventListener('click',()=>{ 
    let row = r.value;
    let col = c.value;
    m2.innerHTML=''
    for (let i = 0; i < row*col; i++) {
        let p = document.createElement('p')
        p.innerHTML=Math.floor(Math.random()*11)
        p.id='m2_'+i
        m2.appendChild(p)
    }
})
let result = document.getElementById('result')
document.getElementById('add').addEventListener('click',()=>{ 
    let row = r.value;
    let col = c.value;
    result.innerHTML ='';
    for (let i = 0; i < row*col; i++) {
        let p = document.createElement('p')
        p.innerHTML= document.getElementById('m1_'+i).innerHTML*1+document.getElementById('m2_'+i).innerHTML*1
        result.appendChild(p)
    }
})
