function createBtn(tag, text, clas, path) {
  btn = document.createElement(tag);
  btn.classList.add(clas);
  btn.href = path;
  btn.innerHTML = text;
  return btn;
}
function circleCreate(color) {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = color;
  console.log(circle);
  return circle;
}

let switchBtn = createBtn('button', 'PUSH <br> to switch color', 'big-btn', '');
document.body.append(switchBtn);
document.body.append(circleCreate('red'));
document.body.append(circleCreate('yellow'));
document.body.append(circleCreate('green'));
let btnPrev = createBtn('a', 'PREVIOUS', 'nav-btn', '2.html');
document.body.append(btnPrev);

let svf = document.querySelectorAll('.circle');
let i = 0;
svf[0].classList.add('up');
switchBtn.addEventListener('click', () => {
  i++;
  if (i == 3) { i = 0 };
  svf.forEach((el) => {
    el.classList.remove('up');
  });
  svf[i].classList.add('up');
});
