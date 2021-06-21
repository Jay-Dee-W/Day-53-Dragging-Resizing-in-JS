
  const dragbox = document.getElementById('box')
  const container = document.getElementById('container');

  document.mouseState = 'up';
  dragbox.mouseState = 'up';
  dragbox.prevPosY = null;
  dragbox.prevPosX = null;
  dragbox.posY = parseInt(dragbox.style.top, 10);
  dragbox.posX = parseInt(dragbox.style.left, 10);
  
  dragbox.style.top = '40px';
  dragbox.style.left = '40px';
  dragbox.style.height = '60px';
  dragbox.style.width = '60px';
  container.style.top = '20px';
  container.style.left = '20px';
  container.style.height = '200px';
  container.style.width = '400px';
  document.onmousedown = function() {
    document.mouseState = 'down';
  };
  
  document.onmouseup = function() {
    document.mouseState = 'up';
    dragbox.mouseState = 'up';
  };
  dragbox.onmousedown = function(e) {
    dragbox.prevPosY = e.pageY; 
    dragbox.prevPosX = e.pageX;
    dragbox.mouseState = 'down';
    document.mouseState = 'down';
  };
  
  dragbox.onmouseup = function() {
    dragbox.mouseState = 'up';
    document.mouseState = 'up';
  };
  function calcPos(obj, attrib) {
    return parseInt(obj.style[attrib], 10);
  };
  
  document.onmousemove = function(e) { 
    if ((document.mouseState === 'down') && (dragbox.mouseState === 'down')) {
      dragbox.posY = calcPos(dragbox, 'top') + e.pageY - dragbox.prevPosY;
      dragbox.posX = calcPos(dragbox, 'left') + e.pageX - dragbox.prevPosX;
  
      if (dragbox.posY < calcPos(container, 'top')) {
        dragbox.style.top = container.style.top;
      } else if (dragbox.posY > calcPos(container, 'top') + calcPos(container, 'height') - calcPos(dragbox, 'height')) {
        dragbox.style.top = calcPos(container, 'top') + calcPos(container, 'height') - calcPos(dragbox, 'height') + 'px';
      } else {
        dragbox.style.top = dragbox.posY + 'px';
      }
      if (dragbox.posX < calcPos(container, 'left')) {
        dragbox.style.left = container.style.left;
      } else if (dragbox.posX > calcPos(container, 'left') + calcPos(container, 'width') - calcPos(dragbox, 'width')) {
        dragbox.style.left = calcPos(container, 'left') + calcPos(container, 'width') - calcPos(dragbox, 'width') + 'px';
      } else {
        dragbox.style.left = dragbox.posX + 'px';
      }
      dragbox.prevPosY = e.pageY;
      dragbox.prevPosX = e.pageX;
    }
  };