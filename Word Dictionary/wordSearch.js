(function(){
    $(document).ready(init);
    var url = window.location.href;
    var word = url.split("word=");
    word = word[1];

function init(){
    var h2 = document.createElement("h1");
    h2.textContent = word;
    h2.className = "word";
    $(h2).css('color', 'navy');
    $('.word').append(h2);

    //Definitons
    $.getJSON("http://api.wordnik.com/v4/word.json/" + word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(data){
        definition(data);
    });

    //Examples
    $.getJSON("http://api.wordnik.com/v4/word.json/" + word + "/examples?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(data){
        exapmles(data);
    });

    //Related Words
    $.getJSON("http://api.wordnik.com/v4/word.json/" + word + "/relatedWords?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", function(data){
        related(data);
    })

    $('#search').on('click', search);
    $('#wordInput').keyup(function(e){
        if(e.keyCode === 13){
            search();
        }
    })
}

function definition(data){
    var ol = document.createElement("ol");
    for(var i in data){;
        var def = document.createElement("li");
        def.textContent = data[i].text + " Part of speech: " + data[i].partOfSpeech;
        $(ol).append(def);
    }
    $('.wordDefinitions').append(ol);
}

function exapmles(data){
    var ol = document.createElement("ol");
    for(var i = 0; i < 3; i++){
        var def = document.createElement("li");
        def.textContent = data.examples[i].text;
        $(ol).append(def);
    }
    $('.wordExamples').append(def);
}

function related(data){
    var ol = document.createElement("ol");
    for(var i in data[3].words){
        var def = document.createElement("li");
        def.textContent = data[3].words[i];
        $(ol).append(def);
    }
    $('.related').append(def);
}

function search(){
    var w = $('#wordInput').val();
    location.replace("wordSearch.html?word=" + w);
}
})();