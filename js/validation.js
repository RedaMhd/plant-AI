
export function validate_form(){
    const formFeilds = document.querySelectorAll('.feild');
    const formbtn = document.querySelector('form > button');
    // const fromPr = $(formbtn).parsley();
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

}