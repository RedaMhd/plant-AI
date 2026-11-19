import { creatProject } from "./prompt.js";
export function validate_form(){
    const formFeilds = document.querySelectorAll('.feild');
    const form = document.querySelector('.new-project');
    const formbtn = document.querySelector('form > button');
    formFeilds.forEach(el =>{
        // console.log(el.tagName)
        el.addEventListener('keydown', ()=>{
            // alert('he')
            let elp = $(el).parsley();
            const pErr = document.querySelector(`.onError-${el.id}`);
            if(!elp.isValid()){
                // console.log(`.onError-${el.id}`);
                
                pErr.classList.remove('hidden');
                pErr.textContent = `ERroR : _-${elp.getErrorsMessages()}`
                // console.log(pErr)
                // form.classList.add('line-through');
                formbtn.classList.add('line-through');

            }else
                pErr.classList.add('hidden');
                formbtn.classList.remove('line-through');
        })
    })
    form.addEventListener('submit', (e)=>{
        const formPr = $(form).parsley();
        e.preventDefault();
        if(!formPr.isValid()){
            return ;
        }
        let formData = new FormData(e.target);
        let dataForm = Object.fromEntries(formData);
        creatProject(dataForm);
    })

}