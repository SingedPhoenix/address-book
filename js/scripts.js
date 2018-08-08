


$(document).ready(function() {
$("#contactInfo").submit(function(){
  event.preventDefault();
  var name = $("#name").val();
  var phone = $("#phonenumber").val();
  var address = $("#address").val();

$(".addedName").append( "<div> <p>" + name + "</p> <ul class=\"" + name + "\" ;> <li> " + address + "</li> <li > " + phone + "</li></ul> </div>");
$(".rolodex-card").show();

  });
});




//   $(document).ready(function(){
//     $(".addedName").click(function(){
//       $(this).siblings().toggleClass("hidden");
//
//     });
// });
