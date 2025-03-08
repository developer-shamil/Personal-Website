$(document).ready(function() {
    $("#form").validate({
        errorClass: 'error',
        validClass: 'valid',
        rules: {
            fname: {
                required: true,
                minlength: 4,
                maxlength: 10
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        }
    })

    $("#form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbx42jSzCz-nQjhLF9_3SHbssS9txcFnXGdu07w4P1sc25BM3zKz3HvLzW5KsjXU0SZm/exec",
            data:$("#form").serialize(),
            method:"post",
            success:function (response){
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })

    $("#SubmitButton").click(function() {
        var fname = $("#fname").val()
        var lname = $("#lastname").val()
        var email = $("#email").val()
        var message = $("#message").val()

        if(fname == '' || lname == '' || email == '' || message == '') {
            swal({
                title: "Fields Empty!",
                text: "Please Check The Missing Fields!",
                icon: "warning",
                button: "Ok",
            })
        }
        else {
            swal({
                title: "Congrarulations Your Contact Form is Submited",
                icon: "success",
                button: "Ok",
            })
        }
    })
})