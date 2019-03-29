$(document).ready(function() {
  $("#quiz").submit(function(event) {

    var shortForm = parseInt($("input:radio[name=quiz1]:checked").val());
    var js = parseInt($("input:radio[name=quiz2]:checked").val());
    var language = parseInt($("input:radio[name=quiz3]:checked").val());
    var booleans = parseInt($("input:radio[name=quiz4]:checked").val());
    var display = parseInt((shortForm + js + language + booleans) / 30 * 100);
      event.preventDefault();
    $("hide").slideDown();
    $("#results").text("your score is : "+display + "%");






  })

})
