(function(){
    $(document).ready(init);

    function init(){
        $('#play').on('click', play);
        $('button').on('click', click);
        clickCount = -1;
        play = false;
        green = 0;
        red = 0;
    }

    function play(){
        play = true;
        $('.btns').css('background-color', 'lightslategray');
        console.log("working");
    }

    function click(){
        if(play === true){
            clickCount++;
            var id = $(this).attr('id');
            if(clickCount % 2 === 0){
                $(this).css('background-color', '#B20028');
                $(this).attr('name', 'red');
            }

            if(clickCount % 2 != 0){
                $(this).css('background-color', '#3CFF5B');
                $(this).attr('name', 'green');
            }

            if($('#1a').attr('name') === 'red' && $('#1b').attr('name') === 'red' && $('#1c').attr('name') === 'red'||
            $('#2a').attr('name') === 'red' && $('#2b').attr('name') === 'red' && $('#2c').attr('name') === 'red'||
            $('#3a').attr('name') === 'red' && $('#3b').attr('name') === 'red' && $('#3c').attr('name') === 'red'||
            $('#1a').attr('name') === 'red' && $('#2a').attr('name') === 'red' && $('#3a').attr('name') === 'red'||
            $('#1b').attr('name') === 'red' && $('#2b').attr('name') === 'red' && $('#3b').attr('name') === 'red'||
            $('#1c').attr('name') === 'red' && $('#2c').attr('name') === 'red' && $('#3c').attr('name') === 'red'||
            $('#1a').attr('name') === 'red' && $('#2b').attr('name') === 'red' && $('#3c').attr('name') === 'red'||
            $('#1c').attr('name') === 'red' && $('#2b').attr('name') === 'red' && $('#3a').attr('name') === 'red')  {
                red++;
                // console.log(red);
                $('#red').text(red);
                resetBoard();
            } 

            if($('#1a').attr('name') === 'green' && $('#1b').attr('name') === 'green' && $('#1c').attr('name') === 'green'||
            $('#2a').attr('name') === 'green' && $('#2b').attr('name') === 'green' && $('#2c').attr('name') === 'green'||
            $('#3a').attr('name') === 'green' && $('#3b').attr('name') === 'green' && $('#3c').attr('name') === 'green'||
            $('#1a').attr('name') === 'green' && $('#2a').attr('name') === 'green' && $('#3a').attr('name') === 'green'||
            $('#1b').attr('name') === 'green' && $('#2b').attr('name') === 'green' && $('#3b').attr('name') === 'green'||
            $('#1c').attr('name') === 'green' && $('#2c').attr('name') === 'green' && $('#3c').attr('name') === 'green'||
            $('#1a').attr('name') === 'green' && $('#2b').attr('name') === 'green' && $('#3c').attr('name') === 'green'||
            $('#1c').attr('name') === 'green' && $('#2b').attr('name') === 'green' && $('#3a').attr('name') === 'green')  {
                green++;
                // console.log(red);
                $('#green').text(green);
                resetBoard();
            } 

            if(clickCount === 9){
                resetBoard();
            }

            // console.log(clickCount);
        }
    }

    function resetBoard(){
        $('.btns').css('background-color', 'lightslategray');
        $('.btns').attr('name', 'nothing');
        clickCount = -1
    }
})();