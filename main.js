(function(){
    $(document).ready(init);
function init(){
    $('#submit').on('click', leave);
    $('#wordInput').keyup(function(e){
        if(e.keyCode === 13){
            leave();
        }
    })
}

function leave(){
    var word = $('#wordInput').val();
    location.replace("wordSearch.html?word=" + word);
}
})();