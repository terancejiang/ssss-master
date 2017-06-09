$(document).ready(function () {
    "use strict";
    $("button#submit").click(function (e) {

        var username = $("#username").val(), password = $("#password").val();

        if ((username === "") || (password === "")) {
            $("#message").html("<div class=\"alert alert-danger alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>Please enter a username and a password</div>");

        } else {
            //var data = $("#loginform").serialize();

            var _data =  'action=login&username= '+username.val()+ '&passowrd=' +password.val();
            $.ajax({
                type : 'POST',
                url: "../Controller/checklogin.php",
                data: data,

                success: function (html) {
                    console.log(html.response + ' ' + html.username);
                    if (html.response === 'true') {
                        //location.assign("../index.php");
                       location.reload();
                        return html.username;
                        console.log(html.response);
                    } else {
                        $("#message").html(html.response);
                        console.log(html.response);
                    }
                    //alert(html);

                },
                error: function (textStatus, errorThrown) {
                    console.log(textStatus);
                    console.log(errorThrown);
                },
                beforeSend: function () {
                    $("#message").html("<p class='text-center'><img src='../images/ajax-loader.gif'></p>");
                }
            });
            e.preventDefault();
        }


    });
});
