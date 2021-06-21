const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;



let x = 0;
let y = 0;


let leftWidth = 0;

const mouseDownHandler = function (e) {


    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;


    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};


resizer.addEventListener('mousedown', mouseDownHandler);

const mouseMoveHandler = function (e) {

    const dx = e.clientX - x;
    const newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = `${newLeftWidth}%`;

};

const mouseUpHandler = function () {


    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};