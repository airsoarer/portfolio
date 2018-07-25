(function(){
    $(document).ready(init);
    var money = 0;

    function init(){
        $('#spin').on('click', spin);
    }

    function spin(){
        // Get random numbers
        var randomNumOne = Math.floor((Math.random() * 3) + 1);
        var randomNumTwo = Math.floor((Math.random() * 3) + 1);
        var randomNumThree = Math.floor((Math.random() * 3) + 1);

        // Photo one
        if(randomNumOne === 1){
            $('#one').attr('src', '../photos/cherries.jpg');
        }else if(randomNumOne === 2){
            $('#one').attr('src', '../photos/seven.jpg');
        }else{
            $('#one').attr('src', '../photos/lemon.png');
        }

        // Photo two
        if(randomNumTwo === 1){
            $('#two').attr('src', '../photos/cherries.jpg');
        }else if(randomNumTwo === 2){
            $('two').attr('src', '../photos/seven.jpg');
        }else{
            $('#two').attr('src', '../photos/lemon.png');
        }

        // Photo three
        if(randomNumThree === 1){
            $('#three').attr('src', '../photos/cherries.jpg');
        }else if(randomNumThree === 2){
            $('#three').attr('src', '../photos/seven.jpg');
        }else{
            $('#three').attr('src', '../photos/lemon.png');
        }

        if(randomNumOne === 3  && randomNumTwo === 3 && randomNumThree === 3){
            money += 100;
        }

        if(randomNumOne === 1 && randomNumTwo  === 1 && randomNumThree === 1){
            money += 500;
        }

        if(randomNumOne === 2 && randomNumTwo === 2 && randomNumThree === 2){
            money +=  1000;
            
        }

        // console.log(money)

        $('#money').text("$" + money);
    }
})();