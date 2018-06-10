$(document).ready(function(){
    $(".read-more-link").click(function(){
        $(this).prev(".read-more-text").toggle();
    });
});