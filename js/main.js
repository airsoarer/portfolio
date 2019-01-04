(function(){
    $(document).ready(init);

    function init(){
        // $(".navBtn").on("click", change);
        $(".homeBtn").on('click', home);
        $(".workBtn").on("click", work);
        $(".contactBtn").on("click", contact);
        $("#send").on("click", sendEmail);
        $("#downArrow").on("click", scroll);

        $(".modal").modal();
        // $(".modal").modal("open");
    }

    function scroll(){
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, "slow");
    }

    function home(){
        $(".home").css("display", "block");
        $(".work").css("display", "none");
        $(".contact").css("display", "none");
    }

    function work(){
        $(".home").css("display", "none");
        $(".work").css("display", "block");
        $(".contact").css("display", "none");

        $("footer").css("padding-top", "75px !important");
    }

    function contact(){
        $(".home").css("display", "none");
        $(".work").css("display", "none");
        $(".contact").css("display", "block");
    }

    function change(){
        if($(this).attr("id") === "home"){
            $(".home").css("display", "block");
            $(".work").css("display", "none");
            $(".contact").css("display", "none");
        }else if($(this).attr("id") === "work"){
            $(".home").css("display", "none");
            $(".work").css("display", "block");
            $(".contact").css("display", "none");
        }else{
            $(".home").css("display", "none");
            $(".work").css("display", "none");
            $(".contact").css("display", "block");
        }
    }

    function sendEmail(){
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $("#phone").val();
        var message = $('#message').val();

        var templateParams = {
            Name:name,
            Email:email,
            Phone:phone,
            Message:message,
        };

        emailjs.send('gmail', 'get_in_contact', templateParams).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $("#sent").css("display", "block");
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
})();