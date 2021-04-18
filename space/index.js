$(document).ready(function(){

    var spaceship = $('#spaceship');

    //Writing css
    spaceship.css({
        'position' : 'absolute', //By default static
        'left': 100,
        'top': 100
    })


    var ismovingRight = false;

    $(document).on('keydown', function(e){
        console.log(e.keyCode)
        //39
        var key = e.keyCode;

       

        if(key == 39){
            //spaceship.css('left' ,(spaceship.position().left + 5) )

            ismovingRight = true;
        }
    })

    $(document).on('keyup', function(e){
        console.log(e.keyCode)
        //39
        var key = e.keyCode;

        if(key == 39){
            //spaceship.css('left' ,(spaceship.position().left + 5) )
            ismovingRight = false;
        }
    })

    function move(){
        if(ismovingRight){
            spaceship.css('left' ,(spaceship.position().left + 5) )
        }
    }

    setInterval(move , 10)




});