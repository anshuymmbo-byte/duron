$(document).ready(function () {

    $("#contactForm").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 2
            },
            emailAddr: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            fullName: {
                required: "Please enter your name",
                minlength: "At least 2 characters required"
            },
            emailAddr: {
                required: "Please enter email",
                email: "Enter valid email"
            },
            subject: {
                required: "Please select subject"
            },
            message: {
                required: "Please enter message",
                minlength: "Minimum 10 characters required"
            }
        },

        errorElement: "div",

        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            element.closest(".mb-3").append(error);
        },

        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },

        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },

        submitHandler: function (form) {
            alert("Message Sent Successfully ✅");
            form.reset();
            $(".form-control, .form-select").removeClass("is-valid");
        }
    });

});