$(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // script for toggle/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Graphic Designer", "Social Media Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Graphic Designer", "Social Media Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

