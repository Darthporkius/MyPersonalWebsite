/*This sets it so the script runs after
the page has loaded*/
$(document).ready(function(){
    scrollToTab();
})

/*This select teh target by clicking on it*/
function scrollToTab(){
    $("nav a").click(function(e){
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}
