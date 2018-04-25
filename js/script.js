$(".skill-header").on("click", function() {
    $(this).find(".fa-chevron-down").toggleClass("fa-flip-vertical", 'slow');
    $(this).next().slideToggle("slow");
});

$(".skill").hover(function() {
         $(this).find(".proficiency-bar").find("b").text($(this).find(".proficiency-bar")[0].style.width).fadeIn("fast");
    }, function() {
         $(this).find(".proficiency-bar").find("b").fadeOut("fast");
});

$("h5").hover(function () {
       $(this).find(".fa").addClass("shadow-pulse");
   }, function() {
       $(this).find(".fa").removeClass("shadow-pulse");
});