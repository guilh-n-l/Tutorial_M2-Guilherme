$(document).ready(function(){
    const colorA = '#395B64';
    const colorB = '#373737';
    var currentColor = colorB;

    /* carroussel right */
    $('#right').click(function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active');
            nextImg.addClass('active')
        }
        else{
            currentImg.removeClass('active');
            $('#first-profile').addClass('active');
        }
    })
    /* carroussel left */
    $('#left').click(function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active');
            prevImg.addClass('active')
        }
        else{
            currentImg.removeClass('active');
            $('#last-profile').addClass('active');
        }
    })
    /* Change background color on click */
    $('.container').click(function(){
        if(currentColor == colorA){
            currentColor = colorB
            $('.container').css('background', currentColor)
        }
        else{
            currentColor = colorA
            $('.container').css('background', currentColor)
        }
    })
})

