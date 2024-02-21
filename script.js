let btn1 = document.querySelector('.btn1');

let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');

let a = false;

btn1.onclick = function () {
  if (a === false) {
    text1.style.display = 'inline'
    text2.style.display = 'none'
   
    a = true;
    console.log(a);
  } else if (a === true) {
    text1.style.display = 'none'
    text2.style.display = 'inline'
  
    a = false;
    console.log(a);
  }
};
