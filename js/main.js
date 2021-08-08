// Sticky Navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("is-sticky");
        $("nav").css({ "transition": "300ms" });
        $("nav").removeClass("nav-padding");
    }
    else {
        $("nav").removeClass("is-sticky");
        $("nav").css({ "transition": "300ms" });
        $("nav").addClass("nav-padding");
    }
});

$(document).ready(function(){
    $("#menu-icn").click(function(){
        $("nav").addClass("is-sticky");
        $("nav").removeClass("nav-padding");
    });
});

// Portfolio Container
$(document).ready(function(){
    
    // Image 1
    $("#folio-pc-1-bo").hide();
    $("#folio-pc-1").mouseenter(function(){
        $("#folio-pc-1-img").css({'transition': '1s'});
        $("#folio-pc-1-img").addClass("img-up");
        $("#folio-pc-1-bo").show();
    });
    $("#folio-pc-1").mouseleave(function(){
        $("#folio-pc-1-img").css({'transition': '1s'});
        $("#folio-pc-1-img").removeClass("img-up");
        $("#folio-pc-1-bo").hide();
    });

    // Image 2
    $("#folio-pc-2-bo").hide();
    $("#folio-pc-2").mouseenter(function(){
        $("#folio-pc-2-img").css({'transition': '1s'});
        $("#folio-pc-2-img").addClass("img-up");
        $("#folio-pc-2-bo").show();
    });
    $("#folio-pc-2").mouseleave(function(){
        $("#folio-pc-2-img").css({'transition': '1s'});
        $("#folio-pc-2-img").removeClass("img-up");
        $("#folio-pc-2-bo").hide();
    });

    // Image 3
    $("#folio-pc-3-bo").hide();
    $("#folio-pc-3").mouseenter(function(){
        $("#folio-pc-3-img").css({'transition': '1s'});
        $("#folio-pc-3-img").addClass("img-up");
        $("#folio-pc-3-bo").show();
    });
    $("#folio-pc-3").mouseleave(function(){
        $("#folio-pc-3-img").css({'transition': '1s'});
        $("#folio-pc-3-img").removeClass("img-up");
        $("#folio-pc-3-bo").hide();
    });

    // Image 4
    $("#folio-pc-4-bo").hide();
    $("#folio-pc-4").mouseenter(function(){
        $("#folio-pc-4-img").css({'transition': '1s'});
        $("#folio-pc-4-img").addClass("img-up");
        $("#folio-pc-4-bo").show();
    });
    $("#folio-pc-4").mouseleave(function(){
        $("#folio-pc-4-img").css({'transition': '1s'});
        $("#folio-pc-4-img").removeClass("img-up");
        $("#folio-pc-4-bo").hide();
    });

    // Image 5
    $("#folio-pc-5-bo").hide();
    $("#folio-pc-5").mouseenter(function(){
        $("#folio-pc-5-img").css({'transition': '1s'});
        $("#folio-pc-5-img").addClass("img-up");
        $("#folio-pc-5-bo").show();
    });
    $("#folio-pc-5").mouseleave(function(){
        $("#folio-pc-5-img").css({'transition': '1s'});
        $("#folio-pc-5-img").removeClass("img-up");
        $("#folio-pc-5-bo").hide();
    });

    // Image 6
    $("#folio-pc-6-bo").hide();
    $("#folio-pc-6").mouseenter(function(){
        $("#folio-pc-6-img").css({'transition': '1s'});
        $("#folio-pc-6-img").addClass("img-up");
        $("#folio-pc-6-bo").show();
    });
    $("#folio-pc-6").mouseleave(function(){
        $("#folio-pc-6-img").css({'transition': '1s'});
        $("#folio-pc-6-img").removeClass("img-up");
        $("#folio-pc-6-bo").hide();
    });
});