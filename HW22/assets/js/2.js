
function createBtn(tag, text, clas, path){
  btn  = document.createElement(tag);
  btn.classList.add(clas);
  btn.href = path;
  btn.innerHTML = text;
  return btn;
}

let openBtn = createBtn('button', 'PUSH <br> to open Modal','big-btn','');
document.body.append(openBtn);
let btnNext = createBtn('a', 'NEXT', 'nav-btn', '3.html' );
document.body.append(btnNext);
let btnPrev = createBtn('a', 'PREVIOUS', 'nav-btn','index.html'); 
document.body.append(btnPrev);

openBtn.addEventListener('click', () => {
openBtn.style.position='absolute';
openBtn.style.zIndex='-1';
btnNext.style.position='absolute';
btnNext.style.zIndex='-1';
btnPrev.style.position='absolute';
btnPrev.style.zIndex='-1';
modal=document.createElement('div');
modal.classList.add('modal');
btnCloseModal=document.createElement('button');
btnCloseModal.innerText='CLOSE';
btnCloseModal.classList.add('big-btn');
modal.append(btnCloseModal);
document.body.append(modal);
btnCloseModal.addEventListener('click',()=>{
    modal.remove();
    openBtn.style.position = 'static';
    openBtn.style.zIndex = '1';
    btnNext.style.position = 'static';
    btnNext.style.zIndex = '1';
    btnPrev.style.position = 'static';
    btnPrev.style.zIndex = '1';
    
  });
});