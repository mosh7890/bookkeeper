$(function () {

    $("#button1").click(function () {
        $("#form1 > input").each(function () {
            this.nextSibling.textContent = "";
        });

        $("#results").html("");

        if (usernameCheck() && emailCheck() && passwordCheck() && phonenumCheck() && countryCheck()) {
            $("#formcheck").html("Thank You " + $("#username").val());
        }
        else {
            $("#form1 > input").each(function () {
                this.nextSibling.textContent = "";
            });
            usernameCheck();
            emailCheck();
            passwordCheck();
            phonenumCheck();
            countryCheck();
        }
        submitForm();
    });

    var usernameCheck = function () {
        if ($("#username").val().length < 5) {
            $("#username").after(" The supplied username is too short, try again using 5 or more characters.");
            return false;
        }
        else {
            return true;
        }
    }

    var emailCheck = function () {
        if ($("#email").val().length < 1) {
            $("#email").after(" Please enter an email address.");
            return false;
        }
        else {
            return true;
        }
    }

    var passwordCheck = function () {
        if ($("#password").val().length < 6) {
            $("#password").after(" The supplied password is too short, try again using 6 or more characters.");
            $("#repeatpw").after(" Please enter a valid password above.");
            return false;
        }
        else {
            if ($("#password").val() != $("#repeatpw").val()) {
                $("#repeatpw").after(" The supplied passwords do not match, try again.");
                return false;
            }
            else {
                return true;
            }
        }
    }

    var phonenumCheck = function () {
        if ($("#phonenum").val().length < 1) {
            $("#phonenum").after(" Please enter a phone number.");
            return false;
        }
        else if ($("#phonenum").val().length > 15) {

            $("#phonenum").after(" The supplied phone number is too long, try again using 14 or less numbers.");
            return false;
        }
        else {
            return true;
        }
    }

    var countryCheck = function () {
        var swap = $("#country").val();
        if (swap.length < 1) {
            $("#country").after(" Please enter a country.");
            return false;
        }
        else if (swap.toLowerCase() === "israel" || swap.toLowerCase() === "usa") {
            return true;
        }
        else {
            $("#country").after(" This service is not available in your country, try again.");
            return false;
        }
    }

    var submitForm = function () {
        var x = document.forms["form1"];
        for (i = 0; i < x.length - 1; i++) {
            $("#results").append(x.elements[i].id + ":" + x.elements[i].value + "<br>");
        }
    }

});