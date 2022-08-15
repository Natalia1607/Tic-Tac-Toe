const area = document.getElementById('area');
let result = '';
let move = 0;
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const cros = '<span id="cros">X</span>';
const toe = '<span id="toe">O</span>';

area.addEventListener('click', event => {
    if(event.target.className = 'box') {
        move % 2 === 0 ? event.target.innerHTML = `${cros}` : event.target.innerHTML = `${toe}`;
        move++;
        check();
    }
});

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == `${cros}` && boxes[arr[i][1]].innerHTML == `${cros}` && boxes[arr[i][2]].innerHTML == `${cros}`
        ) {
            result = 'Crosses';
            prepareResult(result);
            modalResult.style.backgroundColor = '#ebdd1d8e';
        } else if (
            boxes[arr[i][0]].innerHTML == `${toe}` && boxes[arr[i][1]].innerHTML == `${toe}` && boxes[arr[i][2]].innerHTML == `${toe}`
        ) {
            result = 'Toe';
            prepareResult(result);
            modalResult.style.backgroundColor = '#69eb1d8e';
        } 
    }
};

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner} won!`;
    modalResult.style.display = 'block';
};

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);