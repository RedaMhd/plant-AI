import {storApiKey} from './storage.js';

export function style_Header() {
    const hum = document.querySelector('#hum');
    const x = document.querySelector('#x');
    const navChld = document.querySelector('nav');
    hum.addEventListener("click", () => {
        navChld.classList.toggle('hidden');
        hum.classList.toggle('hidden');

    })
    x.addEventListener("click", () => {
        navChld.classList.toggle('hidden');
        hum.classList.toggle('hidden');

    })
}

export function parametre_AI() {
    const btn = document.querySelector('#btn-parametre');
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn_confirm = document.createElement('button');
    const btn_demo = document.createElement('button');
    const main = document.querySelector('main');

    const div = document.createElement('div');


    dialog.className = 'bg-blue-900 flex flex-wrap gap-1 font-black m-auto';
    form.className = 'border border-blue-500 flex flex-wrap gap-1 p-3 font-black m-auto';
    label.className = "text-gray-300 w-[95%]";
    input.className = "bg-gray-300 rounded-xl w-[95%]";
    btn_confirm.className = "bg-sky-500 text-blue-50 rounded-xl w-[40%]";
    btn_demo.className = "bg-gray-200 text-blue-950 rounded-xl w-[40%]";
    input.type = 'password';

    // const formP = $(form).parsley();

    label.textContent = 'AI- API key';
    label.htmlFor = 'api';
    input.setAttribute('required', '');
    input.id = 'api';
    input.name = 'api';
    btn_confirm.textContent = "Ajouter";
    btn_confirm.type = 'submit';
    btn_demo.textContent = "Demo";

    const xOut = document.createElement('div');
    xOut.textContent = 'X';
    xOut.className = 'x text-red-500 w-auto';

    div.className = 'w-full'
    div.append(btn_confirm, btn_demo)
    form.append(label, xOut, input, div);
    dialog.append(form)
    main.append(dialog);
    dialog.classList.add('hidden');

    btn.addEventListener('click', () => {
        dialog.classList.toggle('hidden');

    })

    dialog.addEventListener('click', (e) => {
        if (e.target.closest('.x'))
            dialog.classList.toggle('hidden');
    })

    btn_demo.addEventListener('click', () => {
        to_fetch('../data/sample-plan.json');
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        storApiKey(input.value);
        input.value = '';
        dialog.classList.toggle('hidden');

    })
}

function to_fetch(url) {
    fetch(url)
        .then(res => {
            console.log(res)
            if (!res.ok) throw new Error('this is not good :')
            return res.json();
        })
        .then(jsonProject => {
            // console.log(jsonProject);
            const dataNow = JSON.parse(localStorage.getItem('data')) || [];
            console.log(jsonProject.projectName);
            let index = dataNow.findIndex((d) => jsonProject.projectName === d.name);
            if (index === -1) {
                dataNow.push({ id: dataNow.length, project: jsonProject, name: jsonProject.projectName });
                localStorage.setItem('data', JSON.stringify(dataNow));
                window.location.href = `./project.html?id=${dataNow.length - 1}`;
            } else {

                window.location.href = `./project.html?id=${index}`;
            }
        })
        .catch(err => {
            console.error('ErRor :', err)
        })
}

export function getIdProject() {
    const par = window.location.search;
    const objParameter = new URLSearchParams(par);

    return objParameter.get('id');
}
