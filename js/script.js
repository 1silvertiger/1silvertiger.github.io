const workExperienceUrl = 'https://raw.githubusercontent.com/1silvertiger/1silvertiger.github.io/master/content/workExperience.json';
const educationUrl = 'https://raw.githubusercontent.com/1silvertiger/1silvertiger.github.io/master/content/education.json';
const projectsUrl = 'https://raw.githubusercontent.com/1silvertiger/1silvertiger.github.io/master/content/projects.json';

(async function () {
   const workExperience = await syncFetchJson(workExperienceUrl);
   const education = await syncFetchJson(educationUrl);
   const projects = await syncFetchJson(projectsUrl);

   const app = new Vue({
      el: '#app',
      data: {
         education: education.array,
         workExperience: workExperience.array,
         projects: projects.array
      },
      mounted: function () {
         $(".skill-header").on("click", function () {
            $(this).find(".fa-chevron-down").toggleClass("fa-flip-vertical", 'slow');
            $(this).next().slideToggle("slow");
         });

         $(".skill").hover(function () {
            $(this).find(".proficiency-bar").find("b").text($(this).find(".proficiency-bar")[0].style.width).fadeIn("fast");
         }, function () {
            $(this).find(".proficiency-bar").find("b").fadeOut("fast");
         });

         $("h5").hover(function () {
            $(this).find(".fa").addClass("shadow-pulse");
         }, function () {
            $(this).find(".fa").removeClass("shadow-pulse");
         });
      }
   });
})();

async function syncFetchJson(url) {
   const response = await fetch(url);
   const json = await response.json();
   return json;
}