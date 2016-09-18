$(document).ready(function(){
  $.get('http://localhost:3000/api/v1/cats', function(data){
    data.forEach(function(element,index,array){
      $(".cats-index").append(`<li>${element.name} is ${element.temperament}</li>`)
    })
  })
});

$('form.cat-form').submit(function(event) {
  event.preventDefault();
  var catName = $('#cat-name').val()
  var catTemperament = $('#cat-temperament').val()
  var catBreed = $('#cat-breed').val()
  var catWeight = $('#cat-weight').val()
  var values = {cat: {name: catName, temperament: catTemperament, breed: catBreed, weight: catWeight}}

  var posting = $.post('http://localhost:3000/api/v1/cats', values);

  posting.done(function(data) {
      $(".cats-index").append(`<li>${data.name} is ${data.temperament}</li>`)
  })
});
