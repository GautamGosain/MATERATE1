$(document).ready(function() {
    $('.LoginButton').on('click', function() {
        var user = $('.usern').val();
        var pass = $('.pass').val();
        var t = pass.length;
        var str = "";
        for (var i = 1; i <= t; i++) {
            str += "*";
        }
        console.log("Username:", $(user));
        console.log("Password:", $(pass));
        alert("Username : " + user + "\n" + "Password : " + str);
    });

    $(".box").change(function() {

        // Check the checkbox state
        if ($(this).is(':checked')) {
            // Changing type attribute
            $(".pass").attr("type", "text");
        } else {
            // Changing type attribute
            $(".pass").attr("type", "password");
        }

    });
});