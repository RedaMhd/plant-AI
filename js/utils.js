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

export function parametre_AI(){
    const btn = document.querySelector('#btn-parametre');
    const dialog = document.createElement('dialog');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn_confirm = document.createElement('button');
    const btn_demo = document.createElement('button');
    const main = document.querySelector('main');

    dialog.className = 'border border-blue-500 bg-blue-900 flex flex-wrap gap-1 p-3 font-black m-auto';
    label.className = "text-gray-300 w-[95%";
    input.className = "bg-gray-300 rounded-xl w-[95%]";
    btn_confirm.className = "bg-sky-500 text-blue-50 rounded-xl w-[40%]";
    btn_demo.className = "bg-gray-200 text-blue-950 rounded-xl w-[40%]";
    input.type = 'password';
    
    label.textContent = 'AI- API key';
    label.htmlFor = 'api';
    input.id = 'api';
    input.name = 'api';
    btn_confirm.textContent = "Ajouter";
    btn_demo.textContent = "Demo";

    dialog.append(label, input, btn_confirm, btn_demo);
    main.append(dialog);
    dialog.classList.add('hidden');

    btn.addEventListener('click' , ()=>{
        dialog.classList.toggle('hidden');

    })
}