$(document).ready(function(){
$("#quiz").submit(function(event){
  event.preventDefault();
     var shortForm = parseInt($("input:radio[name=Quiz1]:checked").val());
     var js = parseInt($("input:radio[name=quiz2]:checked").val());
     var language = parseInt($("input:radio[name=Quiz3]:checked").val());
     var display = parseInt((shortForm + js + language) /20*100);
      $("hide").slideDown();
      $("#results").text("your score is :"+" "+display + "%");
      





})

})
