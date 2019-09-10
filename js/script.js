const workExperienceUrl = 'https://raw.githubusercontent.com/1silvertiger/1silvertiger.github.io/vue/content/workExperience.json';
const educationUrl = '';
const projectsUrl = '';

(async function () {
   const workExperience = await syncFetchJson(workExperienceUrl);

   const app = new Vue({
      el: '#app',
      data: {
         // education: education,
         workExperience: workExperience.array,
         // projects: projects
      }
   });
})();
// const workExperience = getWorkExperience();
// const education = syncFetchJson(educationUrl);
// const projects = syncFetchJson(projectsUrl);



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

async function getWorkExperience() {
   const response = await fetch(workExperienceUrl);
   return await response.json();
}

async function getEducation() {

}

async function getProjects() {

}

async function syncFetchJson(url) {
   const response = await fetch(url);
   const json = await response.json();
   return json;
}