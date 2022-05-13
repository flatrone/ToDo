let headListInput = document.querySelector('.head-list__input');
let headListButton = document.querySelector('.head-list__button');

let bodyList = document.querySelector('.body-list');

headListButton.addEventListener('click', function() {
    let li = document.createElement('li');
    bodyList.append(li);

    let input = document.createElement('input');
    input.value = headListInput.value;
    input.classList.add('body-list__input');
    li.append(input);
    
    let btn = document.createElement('button');
    btn.classList.add('body-list__button');
    btn.innerHTML = '&#8212';
    btn.addEventListener('click', function() {li.remove();});
    li.append(btn);
});