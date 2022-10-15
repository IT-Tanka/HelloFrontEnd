
const contactForm = document.querySelector('.contact__form');
const ename = contactForm.querySelector('.form__input-name');
const email = contactForm.querySelector('.form__input-email');
const formBtn= document.querySelector('.form__btn');



function error(message, element) {
  element.style.borderColor = 'red';
  let errorEl = document.createElement('span');
  errorEl.className = "error";
  errorEl.style.color='red';
  errorEl.innerText ='Enter your ' + message + ', please';
  element.after(errorEl);
  errorEl.style.position='absolute';
  errorEl.style.bottom = '-20px';
  errorEl.style.left = '0';

}
function clear() {

  this.style.borderColor = '#737171';
  if (this.nextSibling && this.nextSibling.className=='error') {
    this.nextSibling.remove();
  }
}

function checkEmail() {
  let result = ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
  if (!email.value || result) {
    error('e-mail', email); return false;
  } else return true;
}
function checkName() {
  let result = !/^[a-zA-Z0-9_-]+( [a-zA-Z0-9_-]+)*|[а-яА-Я0-9_-]+( [а-яА-Я0-9_-]+)*$/.test(ename.value);
  if (!ename.value || result) {
    error('name', ename); return false;
  } else return true;
}

ename.addEventListener('focusout', checkName);
ename.addEventListener('focusin', clear);

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', clear);
formBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  clear.call(ename);
  clear.call(email);
  if(checkName()&&checkEmail()){
    localStorage.setItem('name', ename.value);
    localStorage.setItem('email', email.value);
    ename.value='';
    email.value='';
    formBtn.value = 'thanks';
    setTimeout(() => { formBtn.value = 'Submit';},2000);  
  }
});


