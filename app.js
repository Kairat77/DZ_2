//используя setTimout и рекурсию заставить блок дигаться по определенному шаблону(как было показано на уроке) 

const position = document.querySelector(".position");
let postonX = 0;
let postonY = 0;
const move = () => {
    if (postonX <=440 && postonY == 0){
    postonX += 16;
    position.style.left = `${postonX}px`;
    setTimeout(move,100)
    }else if (postonX >= 440 && postonY <=440){
        postonY += 16;
        position.style.top = `${postonY}px`;
        setTimeout(move, 100);
    }else if (postonY >= 360 && postonX != 0){
        postonX -= 16;
        position.style.left = `${postonX}px`;
        setTimeout(move, 100);
    }else if (postonX == 0 && postonY != 440){
        postonY -= 16;
        position.style.top = `${postonY}px`;
        setTimeout(move, 100);
    }
};
move();
//создать Интервал который будет выводить в консоль колтчество секунд, прошедших с момента запуска программы и останавливать его после 60.
let num = 0;
function into(){
  num++;
  console.log(num + ' sec')
  if (num >= 60) {
    clearInterval(stop)
  }
}
stop = setInterval(into,1000)