function handleswitchButtons() {
  const activeElement = document.querySelector(".wor.active");
  const inactiveElement = document.querySelector(".wor:not(.active)");

  activeElement.classList.remove("active");

  inactiveElement.classList.add("active");
}

function cacherImage(image) {
  image.src = '/IMAGE/lantern.png';
  image.classList.add('clignote');
  setTimeout(function() {
    image.classList.remove('clignote');
}, 1500);
  const headd = document.querySelector('.headd');
  

const currentBackgroundImage = headd.style.backgroundImage;


const presentationElement = document.querySelector('.presentation');
    presentationElement.style.backgroundColor = 'rgb(7, 1, 12)';
    const workElement = document.querySelector('.work');
    workElement.style.backgroundColor = 'rgb(7, 1, 12)';


if (currentBackgroundImage.includes('op4')) {

  const newBackgroundImage = currentBackgroundImage.replace('op4', 'op2');
  image.src = '/IMAGE/second.png';
 

  headd.style.backgroundImage = newBackgroundImage;
}else{
  
  headd.style.backgroundImage = 'url(/IMAGE/op4.png';
 
}

  const v = document.querySelector('.v');
  v.style.backgroundImage = 'url(/IMAGE/AZDA.png';
}


