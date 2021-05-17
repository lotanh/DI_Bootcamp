function myMove() {
    let elem = document.getElementById("animate");   
    let position = 0;
    let id = setInterval(frame, 5);
    function frame() {
      if (position == 350) {
        clearInterval(id);
      } else {
        position++; 
        elem.style.top = position + 'px'; 
        elem.style.left = position + 'px'; 
      }
    }
  }

  let fill = document.querySelector('.fill');
  let boxes = document.querySelectorAll('.empty');
  
  //Fill listeners
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
  
  
  for (let empty of boxes) {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragOver);
  }
  
  //Drag functions here
  function dragStart () {
      // console.log('start');
      this.className += ' hold';
      setTimeout(() => (this.className = 'invisible'), 0);
  
  }
  
  function dragEnd () {
      // console.log('end');
      this.className.add = 'fill';
  
  }
  
  function dragOver (e) {
      e.preventDefault();
  }
  
  function dragEnter (e) {
      e.preventDefault();
      this.className += ' hovered';
  }
  
  function dragLeave () {
      this.className = 'empty';
  }
  
  function dragDrop () {
      this.className = 'empty';
      this.append(fill);
  
  }

