
const inputEmail =document.getElementById('email');
const form = document.getElementById('create-form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!ValidateEmail(inputEmail)){
        form.classList.remove('success')
        paragraph = form.querySelector('p')
        paragraph.textContent='Email valid required'
        form.classList.add('error')
    }
    if(ValidateEmail(inputEmail)){
        form.classList.remove('error')
        form.classList.add('success')
        form.submit();
    }

});

function ValidateEmail(mail) 
{
    const reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (reg.test(mail.value))
  {
    return (true)
  }
    return (false)
}