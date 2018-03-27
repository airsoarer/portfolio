(function(){
    $(document).ready(init);

function init(){
    $('button').on('click', show);
    $('#equal').on('click', evaluate);
}

function e(){
    var string = ["D", "B", "C", "A", "B", "A"];
    var found = false;

    for(var i = 0; found === false; i++){
        var firstChar = string[i];
        for(var y = 1; found === false; y++){
            var secondChar = string[y];
            if(secondChar === firstChar){
                found === true;
                return firstChar;
                console.log(firstChar);
            }
        }
    }
}

function show(){
    var val = $(this).val();
    if(val === "*"){
        val = "*";
    }
    
    if(val === "="){
        val = "=";
    }

    if(val === " "){
        $('.h').empty();
    }

    $('.h').append(val);
}

function evaluate(){
    var sentence = $('.h').text();
    sentence = sentence.split("=");
    sentence = sentence[0];

    var evaluation = eval(sentence);
    $('.h').empty();
    $('.h').append(evaluation);
}
})();