(function(){
    $(document).ready(init);

    function init(){
        $('#send').on('click', sendEmail);
        // $('.modal').modal();
    }

    function sendEmail(){
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        var templateParams = {
            Name:name,
            Email:email,
            Message:message,
        };

        emailjs.send('gmail', 'get_in_contact', templateParams).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            $('.modal').modal();
            $('.modal').modal('open');
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
})();