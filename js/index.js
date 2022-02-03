const sr = ScrollReveal({
    reset : true,
});
sr.reveal('.menu', {
    duration:4000,
    origin : 'left',
    distance : '100px',
});

sr.reveal('.accueil', {
    duration:7000,
    distance:'20px',
    
});

sr.reveal('.pdp',{
    origin: 'right',
    duration : 3000,
    distance : '200px',

});

sr.reveal('.aboutme',{
    origin: 'left',
    duration : 3000,
    distance : '200px',
   
});
sr.reveal('.skill',{
    origin: 'top',
    duration: 6000,
    distance: '100px'

});
sr.reveal('.softskill',{
    origin:'bottom',
    duration: 9000,
    distance: '50px',
});


sr.reveal('.hardskill',{
    origin: 'left',
    duration:2000,
    delay : 3000,
    distance:'100px',
});

sr.reveal('.contact',{
    duration: 4000,
    origin : 'right',
    distance : '100px',
});
sr.reveal('.projet',{
    origin:'bottom',
    duration: 3000,
    distance: '50px',
});


$(".image").click(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");
    
});

