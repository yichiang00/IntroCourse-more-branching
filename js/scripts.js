$(function(){
  $("form#datingQuestions").submit(function(event) {
  event.preventDefault();
  var genderPref = $("input:radio[name=gender]:checked").val();
  var hobbyPref = parseInt($("#hobby").val());
  if (genderPref === "female") {
      // $(".pairsSuggestM").hide();
    if (hobbyPref === 1) {
      $(".pairsSuggestF .groupA").show();
    } else if (hobbyPref === 2) {
      $(".pairsSuggestF .groupB").show();
    } else {
      $(".pairsSuggestF .groupC").show();
    }
  }else{


      if (hobbyPref === 1) {
        console.log("1");
        $(".pairsSuggestM .groupA").show();
        $(".pairsSuggestM .groupA").append("<h3>It is good choice</h3>");
      } else if (hobbyPref === 2) {
        console.log("2");
        $(".pairsSuggestM .groupB").show();
        $(".pairsSuggestM .groupB").append("<h3>Becarful your eyesight</h3>");
      } else {
        console.log("3");
        $(".pairsSuggestM .groupC").show();
        $(".pairsSuggestM .groupC").append("<h3> Thanks</h3>");

        }
  }

  });

  $("#reset").click(function(){
    $(".pairsSuggestM .groupA").hide();
    $(".pairsSuggestM .groupB").hide();
    $(".pairsSuggestM .groupC").hide();
    $(".pairsSuggestF .groupA").hide();
    $(".pairsSuggestF .groupB").hide();
    $(".pairsSuggestF .groupC").hide();
  });



});
