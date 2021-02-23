$(document).ready(function() {

// let i = 1;
// const squareEl = document.querySelector('#square');
// squareEl.style.backgroundColor = 'green';
// squareEl.style.border = '5px solid blue';
// squareEl.classList.add('big');
// squareEl.addEventListener('click', function(e){
//   squareEl.classList.toggle('big');
//   squareEl.innerHTML = `<p>${i+=1}</p>`;
// })

let i=0;
$('#square')
.css({
    backgroundColor: 'green',
    border: '5px solid blue'
})
.addClass('big')
.click(function(e){
    $(this)
      .toggleClass('big')
      .html(`<p>${i+=1}</p>`);
})
  
  // .css('background-color', 'green')
  // .css('border', '5px solid blue')
})