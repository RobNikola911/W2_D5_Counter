// function clickCounter() {
//   if (typeof (Storage) !== "undefined") {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount) + 1;
//     } else {
//       localStorage.clickcount = 0;
//     }
//     document.getElementById("result").innerHTML = localStorage.clickcount;
//   }
// }
// function clickCounter1() {
//   if (typeof (Storage) !== "undefined") {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount) - 1;
//     } else {
//       localStorage.clickcount = 0;
//     }
//     document.getElementById("result").innerHTML = localStorage.clickcount;
//   }
// };


count = $('#result').text();

$('#increaseButton').click(() => {
  $('#result').text(++count);
})

$('#decreaseButton').click(() => {
  $('#result').text(--count);
});

/* document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date(); */

/*   $(document).ready(function(){
    $("h1").on("click", function(){
      $(this).hide();
    });
  }); */
/*
  $( "#myBtn" ).on('click', (function() {
    $('#demo').text('New Text');
})); */

/* let demo = 0;

$(document).ready(function () {
    $("#myBtn").click(function() {
    let increase = $('h1').html;
    demo++;
     document.title = '(' +sayi+ ')' + baslik;
    });
}); */

