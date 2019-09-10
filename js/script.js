// const education = require('./education.json');
const workExperience = [
    {
        "title": "Title",
        "employer": "Employer",
        "beginMonth": "January",
        "beginYear": "2000",
        "endMonth": "",
        "endYear": "2005",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque dictum varius. Quisque ultricies magna sed erat gravida placerat. Vestibulum maximus nulla aliquet augue lacinia, vel scelerisque dolor congue. Pellentesque gravida ac metus in lacinia. Nam nec diam risus. Pellentesque pretium dolor sapien, vitae dapibus velit tempus nec. Phasellus aliquam erat purus, consectetur elementum elit pharetra a.\n Sed elit ligula, pharetra at suscipit sit amet, condimentum vel est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae sodales ante, interdum scelerisque erat. Curabitur iaculis, nunc eu volutpat gravida, quam leo suscipit arcu, ac tincidunt nibh sem ut sem. Sed vestibulum fringilla velit, eget laoreet leo euismod nec. Etiam non lobortis erat, id dictum magna. Morbi dictum erat at consectetur imperdiet. Curabitur finibus, erat in interdum luctus, nulla felis aliquet sapien, sit amet volutpat lectus nulla sit amet mi. Sed at iaculis ipsum, vitae vestibulum sapien. Ut quis turpis sit amet lacus suscipit molestie. Fusce molestie ante metus, vitae vehicula arcu feugiat non. Phasellus cursus ante id faucibus pretium. Vestibulum id tincidunt enim, id aliquet ligula. Curabitur dignissim lacus sit amet ligula semper dignissim. Integer risus augue, elementum sed molestie vitae, aliquet ac erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
];
// const projects = require('./projects.json');

const app = new Vue({
    el: '#app',
    data: {
        // education: education,
        workExperience: workExperience,
        // projects: projects
    }
});

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