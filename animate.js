var model = document.getElementById('simpleModal');

var first_image = document.getElementById('first_image');
var second_image = document.getElementById('second_image');
var third_image = document.getElementById('third_image');
var fourth_image = document.getElementById('fourth_image');
var fifth_image = document.getElementById('fifth_image');
var sixth_image = document.getElementById('sixth_image');

var closebtn = document.getElementById('close-btn');


first_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}
second_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}
third_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}
fourth_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}
fifth_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}
sixth_image.addEventListener('click',openModal);
function openModal(){
  model.style.display = 'block';
}




closebtn.addEventListener('click',function(){
  model.style.display = 'none';
});

window.addEventListener('click',function(e){
  if (e.target == model) {
  model.style.display = 'none';}
});
var close = document.getElementById('close');
close.onclick = function(){
  model.style.display = 'none';
} 

var setTime = setInterval(function(){

})
// var img = document.getElementById('img');
// img.onmouseover = function(){

// }

