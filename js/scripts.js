$(document).ready(function() {
  $("#quiz").submit(function(event) {
    var shortForm = parseInt($("input:radio[name=quiz1]:checked").val());
    var js = parseInt($("input:radio[name=quiz2]:checked").val());
    var language = parseInt($("input:radio[name=quiz3]:checked").val());
    var booleans = parseInt($("input:radio[name=quiz4]:checked").val());
    var deno = parseInt($("input:radio[name=quiz5]:checked").val());
    var display = parseInt((shortForm + js + language + booleans + deno) / 40 * 100);
    var name = $("input#name").val();
      event.preventDefault();
    $("hide").slideDown();
    $("#results").text( name + " your score is : " + display + "%");
  });
});
