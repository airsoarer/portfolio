(function(){
    $(document).ready(init);

    function init(){
        $('#coin').on('click', flip);
    }

    function flip(){
        var random = Math.floor((Math.random() * 2) + 1);
        $('#coin').addClass('coinFlip');
        $('h4').css('display', 'block');
        setTimeout(function(){
            $('h4').css('display', 'none');
        }, 5000);

        setTimeout(function(){
            $('#coin').removeClass('coinFlip');
            if(random === 1){
                $('#coin').css('background-color', '#FF5C3C');
                $('#coin').addClass('flipCoin');
            }
    
            if(random === 2){
                $('#coin').css('background-color', '#00B26B');
                $('#coin').addClass('flipCoin');
            }
        }, 5000);
        // $('#coin').addClass('flipCoin');
    }
})();