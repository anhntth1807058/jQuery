var validate = $('#login-form').vaidate({
    rules: {
        email: {
            email: true,
            required: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
    },
    message: {
        email: {
            required: 'Vui lòng nhập email của bạn',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        password: {
            required: 'Vui lòng nhập tên của bạn',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            email: $(form['email']).val(),
            password: $(form['password']).val(),
        };
        $.ajax({
            url: REGISTER_API,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            beforeSend: function (xhr) {
                xhr.setRequestHeader(localStorage.getItem('token-key'));
            },

            success: function (data, textStatus, jqXHR) {
                console.log('success');
                console.log(data);
                console.log('----');
                console.log(data.responseText);
                console.log('----');
                console.log(textStatus);
                console.log('----');
                console.log(jqXHR);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    $('#summary')
                        .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                    validator.showErrors(jqXHR.responseJSON.error);
                }
                ;
            }
        });
        return false;
    },
});