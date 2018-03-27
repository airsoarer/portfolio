(function(){
    $(document).ready(init);

function init(){
    $('#col-1_100btn').on('click', c1100btn);
    $('#col-1_200btn').on('click', c1200btn);
    $('#col-1_300btn').on('click', c1300btn);
    $('#col-2_100btn').on('click', c2100btn);
    $('#col-2_200btn').on('click', c2200btn);
    $('#col-2_300btn').on('click', c2300btn);
    $('#col-3_100btn').on('click', c3100btn);
    $('#col-3_200btn').on('click', c3200btn);
    $('#col-3_300btn').on('click', c3300btn);
    $('#col-4_100btn').on('click', c4100btn);
    $('#col-4_200btn').on('click', c4200btn);
    $('#col-4_300btn').on('click', c4300btn);
    $('#addTeam').on('click', addTeam);
}
//MODAL FUNCTION
function addClass(modalId){
    //Get elements by ID
    var modal = document.getElementById(modalId)
    var span = document.getElementsByClassName('close');

    //Close modal
    modal.style.display = "block";
    $('.close').on('click', close);

    //Outside click 
    window.addEventListener("click", outsideClick);

    //Close modal function
    function close(){
        modal.style.display = "none";
    }

    //Outside click function
    function outsideClick(e){
        console.log("this is working");
        if(e.target == modal){
            modal.style.display = "none";
        }
    }
}

function c1100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_100Modal';
    addClass(modalId);
    // Add awnser data to the modal
    // console.log("working");
    $('#col-1_100Check').on('click', addData);
    $('#col-1_100close').on('click', closeData);
    function addData(){
        $('#col-1_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_100awnser').css('display', 'none');
        $('#col-1_100btn').text("");
    }
}

function c1200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_200Modal';
    var btnId = 'col-1_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-1_200Check').on('click', addData);
    $('#col-1_200close').on('click', closeData);
    function addData(){
        $('#col-1_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_200awnser').css('display', 'none');
        $('#col-1_200btn').text("");
    }
}

function c1300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_300Modal';
    var btnId = 'col-1_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-1_300Check').on('click', addData);
    $('#col-1_300close').on('click', closeData);
    function addData(){
        $('#col-1_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_300awnser').css('display', 'none');
        $('#col-1_300btn').text("");
    }
}

function c2100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_100Modal';
    var btnId = 'col-2_100Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_100Check').on('click', addData);
    $('#col-2_100close').on('click', closeData);
    function addData(){
        $('#col-2_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_100awnser').css('display', 'none');
        $('#col-2_100btn').text("");
    }
}

function c2200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_200Modal';
    var btnId = 'col-2_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_200Check').on('click', addData);
    $('#col-2_200close').on('click', closeData);
    function addData(){
        $('#col-2_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_200awnser').css('display', 'none');
        $('#col-2_200btn').text("");
    }
}

function c2300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_300Modal';
    var btnId = 'col-2_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_300Check').on('click', addData);
    $('#col-2_300close').on('click', closeData);
    function addData(){
        $('#col-2_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_300awnser').css('display', 'none');
        $('#col-2_300btn').text("");
    }
}

function c3100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_100Modal';
    var btnId = 'col-3_100Check';
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_100Check').on('click', addData);
    $('#col-3_100close').on('click', closeData);
    function addData(){
        $('#col-3_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_100awnser').css('display', 'none');
        $('#col-3_100btn').text("");
    }
}

function c3200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_200Modal';
    var btnId = 'col-3_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_200Check').on('click', addData);
    $('#col-3_200close').on('click', closeData);
    function addData(){
        $('#col-3_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_200awnser').css('display', 'none');
        $('#col-3_200btn').text("");
    }
}

function c3300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_300Modal';
    var btnId = 'col-3_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_300Check').on('click', addData);
    $('#col-3_300close').on('click', closeData);
    function addData(){
        $('#col-3_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_300awnser').css('display', 'none');
        $('#col-3_300btn').text("");
    }
}

function c4100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-4_100Modal';
    var btnId = 'col-4_100Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-4_100Check').on('click', addData);
    $('#col-4_100close').on('click', closeData);
    function addData(){
        $('#col-4_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-4_100awnser').css('display', 'none');
        $('#col-4_100btn').text("");
    }
}

function c4200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-4_200Modal';
    var btnId = 'col-4_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-4_200Check').on('click', addData);
    $('#col-4_200close').on('click', closeData);
    function addData(){
        $('#col-4_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-4_200awnser').css('display', 'none');
        $('#col-4_200btn').text("");
    }
}

function c4300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-4_300Modal';
    var btnId = 'col-4_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-4_300Check').on('click', addData);
    $('#col-4_300close').on('click', closeData);
    function addData(){
        $('#col-4_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-4_300awnser').css('display', 'none');
        $('#col-4_300btn').text("");
    }
}

function addTeam(){
    var div = document.createElement("div");
    div.className = "Teams"
    var teamNameElement = document.createElement("h2");
    var teamName = $('#teamName').val();
    teamNameElement.textContent = teamName;
    var score = document.createElement("h3");
    score.textContent = "0";
    score.id = "score"+teamName;
    score.className = "score";
    var plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.id = "plus"+teamName;
    plusButton.className = "plus";
    var minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.id = "minus"+teamName;
    minusButton.className = "minus";
    div.appendChild(teamNameElement);
    div.appendChild(score);
    div.appendChild(plusButton);
    div.appendChild(minusButton);
    var placementDiv = document.getElementById('teams');
    placementDiv.appendChild(div);

    $(plusButton).on('click', add);
    $(minusButton).on('click', minus);

    function add(){
        var score1 = $('#score'+teamName).html();
        console.log(score1);
        score1 = Number(score1);
        score1 = score1 + 100;
        console.log(score1);
        $(score).html(score1);
    }

    function minus(){
        var score1 = $('#score'+teamName).html();
        score1 = Number(score1);
        score1 = score1 - 100;
        $(score).html(score1);
    }
}
})();