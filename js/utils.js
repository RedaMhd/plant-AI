export function style_Header(){
    const hum = document.querySelector('#hum');
    const x = document.querySelector('#x');
    const navChld = document.querySelector('nav');
    hum.addEventListener("click", ()=>{
        navChld.classList.toggle('hidden');
        hum.classList.toggle('hidden');
        
    })
    x.addEventListener("click", ()=>{
        navChld.classList.toggle('hidden');
        hum.classList.toggle('hidden');
        
    })
}