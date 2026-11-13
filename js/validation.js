
export function validate_form(){
    const formFeilds = document.querySelectorAll('.feild');
    const formbtn = document.querySelector('form > button');
    const fromPr = $(formbtn).parsley();
    formFeilds.forEach(el =>{
        console.log(el.tagName)
        el.addEventListener('change', ()=>{
            // alert('he')
            let elp = $(el).parsley();
            if(!elp.isValid()){
                const pErr = document.querySelector(`.onError-${el.id}`);
                // console.log(`.onError-${el.id}`);
                
                pErr.classList.toggle('hidden');
                pErr.textContent = `ERroR : _-${elp.getErrorsMessages()}`
                // console.log(pErr)
                // form.classList.add('line-through');
                formbtn.classList.add('line-through');

            }else 
                formbtn.classList.remove('line-through');
        })
    })

}