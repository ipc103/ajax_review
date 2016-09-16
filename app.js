$(document).ready(function(){
  $.get('http://localhost:3000/api/v1/cats', function(data){
    data.forEach(function(element,index,array){
      $(".cats-index").append(`<li>${element.name} is ${element.temperament}</li>`)
    })
  })
});
