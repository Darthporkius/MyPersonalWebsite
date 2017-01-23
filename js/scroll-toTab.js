/*This sets it so the script runs after
the page has loaded*/
$(document).ready(function() {
    scrollToTab();
})

/*This select the target by clicking on it*/
function scrollToTab() {
    $("nav a").click(function(e) {
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";

        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}


// /*This hides or shows tab text by scrolling*/
// $(document).ready(function() { 
//     var homeSectionContent = $(".homeContent");
//     var portfolioSectionContent = $(".portfolioContent");

//     $(window).scroll(function(e) {
//     var windowPosition = $(document).scrollTop();

<<<<<<< HEAD
//     console.log(windowPosition);
//         if (windowPosition >= 500) {
//             homeSectionContent.hide(1000);
//         }else{
//             homeSectionContent.show(1000);
//         }

//         if (windowPosition >= 1487 || windowPosition <= 1200) {
//             portfolioSectionContent.hide(500);
//         } else {
//             portfolioSectionContent.show(500);
//         }
//     });
// });
=======
    console.log(windowPosition);
        if (windowPosition >= 500) {
            homeSectionContent.hide(1000);
        }else{
            homeSectionContent.show(1000);
        }
<<<<<<< HEAD
/*
        if (windowPosition >= 1456 || windowPosition <= 1330) {
=======

        if (windowPosition >= 1487 || windowPosition <= 1200) {
>>>>>>> 6f7a166596a501cec8a1b87fea1c111a32dcd1ea
            portfolioSectionContent.hide(500);
        } else {
            portfolioSectionContent.show(500);
        }
        */
    });
}); 
>>>>>>> aa798f1348fdd369b7596e84c0a83ad6e1f0b803
