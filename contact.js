
// php ajax
$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        };

        $.ajax({
            type: "POST",
            url: "https://stacksharp.com/contacthomepage.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);
        });
        event.preventDefault();
    });
});

