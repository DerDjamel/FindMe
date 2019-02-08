const containers = document.getElementsByClassName('container');
/* adding the events to the containers to flip the cards */
for (var i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', (event) => {
    event.target.classList.toggle('flip');
  });
}





for (var i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', (event) => {
    let flipped         = document.querySelectorAll('.flip');

    if (always_flipped.length != 16) {
      if (flipped.length > 2) {
        unflip();
      }

      if (flipped.length == 2) {
        var names = [getImgName(flipped[0]), getImgName(flipped[1])];
        if (names[0] === names[1]) {
          for (var j = 0; j < flipped.length; j++) {
              flipped[j].classList.remove('flip');
              flipped[j].classList.add('always-flipped');
          }

          write_note('Good!');

        } else {

          setTimeout(function(){
            write_note('keep trying');
            for (var j = 0; j < flipped.length; j++) {
                flipped[j].classList.remove('flip');
            }
          }
          , 1000);
        }

      }/* second if */

    }


  });
}


/***********/
function unflip(){
  let flipped = document.querySelectorAll('.flip');
  for (var j = 0; j < flipped.length; j++) {
      flipped[j].classList.remove('flip');
  }
}

function getImgName(element){
  return element.querySelector('.back-box img').getAttribute('src').split('/')[1].split('.')[0];
}



function write_note(note){
  document.querySelector('#note').textContent = note;
}



/*************/
