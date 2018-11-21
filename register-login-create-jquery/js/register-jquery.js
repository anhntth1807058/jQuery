// $('#register-form').validate({
//     rules: {
//         firstName: {
//             required: true,
//             minlength: 2,
//             maxlength: 15
//         },
//         lastName: {
//             required: true,
//             minlength: 2,
//             maxlength: 15
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         password: {
//             required: true,
//             minlength: 2,
//             maxlength: 15
//         },
//         'confirm-password': {
//             equalTo: '[name="password"]'
//         },
//         address: {
//             required: true,
//         },
//         phone: {
//             required: true,
//             minlength: 2,
//             maxlength: 10
//         },
//     },
//     messages: {
//         firstName: {
//             required: 'Vui lòng nhập tên của bạn.',
//             minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         lastName: {
//             required: 'Vui lòng nhập họ của bạn.',
//             minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         email: {
//             required: 'Vui lòng email của bạn.',
//             email: 'Vui lòng nhập email đúng định dạng'
//         },
//         password: {
//             required: 'Vui lòng nhập password.',
//             minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         'confirm-password': {
//             equalTo: 'Password và confirm không giống nhau.'
//         },
//         address: {
//             required: 'Vui lòng nhập địa chỉ của bạn',
//         },
//         phone: {
//             required: 'Vui lòng nhập số điện thoại của bạn',
//             minlength: 'Số điện thoại quá ngắn, ít nhất 10 con số ',
//             maxlength: 'Số điện thoại quá dài, nhiều nhất 11 con số',
//         },
//     },
//     submitHandler:
//
//         function (form, event) {
//             event.preventDefault();
//             var senderObject = {
//                 firstName: $(form["firstName"]).val(),
//                 lastName: $(form["lastName"]).val(),
//                 password: $(form["password"]).val(),
//                 addClass: $(form["addClass"]).val(),
//                 phone: $(form["phone"]).val(),
//                 avatar: $(form["firstName"]).val(),
//                 gender: $(form["gender"]).val(),
//                 email: $(form["email"]).val(),
//                 birthday: $(form["birthday"]).val(),
//             }
//             $.ajax({
//                 url: REGISTER_API,
//                 type: 'POST',
//                 contentType: 'application/json; chartet=utf-8',
//                 data: JSON.stringify(senderObject),
//                 success: function () {
//                     alert('Success');
//                 },
//                 error: function () {
//                     alert('Error');
//                     //     success: function (data, textStatus, jqXHR) {
//                     //         console.log('success');
//                     //         console.log(data);
//                     //         console.log('-----');
//                     //         console.log(data.responseText);
//                     //         console.log('-----');
//                     //         console.log(textStatus);
//                     //         console.log('-----');
//                     //         console.log(jqXHR);
//                     //     }
//                     // ,
//                     //     error: function (jqXHR, textStatus, errorThrown) {
//                     //         console.log('error');
//                     //         console.log(jqXHR);
//                     //         console.log('-----');
//                     //         console.log(jqXHR.responseText);
//                     //         console.log('-----');
//                     //         console.log(jqXHR.responseJSON.error);
//                     //         console.log('-----');
//                     //         console.log(textStatus);
//                     //         console.log('-----');
//                     //         console.log(errorThrown);
//                     if (jqXHR.responseJSON.error.size > 0) {
//                         validator.showErrors({
//                             firstName: 'Message loi' + jqXHR.responseJSON.error.size
//                         });
//                     } else {
//                         validator.showErrors({
//                             email: 'Message loi'
//                         });
//                     }
//
//                 }
//             });
//             return false;
//         }
// })
// ;
//
// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();
//
//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;
//
//     return [year, month, day].join('-');
// }

var validate = $('#register-form').vaidate({
    rules: {
        firstName: {
            required: true,
            minlength: 2,
            maxlength: 10
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 10
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 10
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        },
        address: {
            required: true,
        },
        phone: {
            required: true,
            minlength: 2,
            maxlength: 10
        },
    },
    message: {
        firstName: {
            required: 'Vui lòng nhập tên của bạn',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất 2 ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập ít nhất 10 ký tự',
            lastName: {
                required: 'Vui lòng nhập họ của bạn',
                minlength: 'Họ quá ngắn, vui lòng nhập ít nhất 2 ký tự',
                maxlength: 'Họ quá dài, vui lòng nhập ít nhất 10 ký tự'
            },
            email: {
                required: 'Vui lòng nhập email của bạn',
                minlength: 'Email quá ngắn, vui lòng nhập ít nhất 2 ký tự',
                maxlength: 'Email quá dài, vui lòng nhập ít nhất 10 ký tự'
            },
            password: {
                required: 'Vui lòng nhập tên của bạn',
                minlength: 'Password quá ngắn, vui lòng nhập ít nhất 2 ký tự',
                maxlength: 'Password quá dài, vui lòng nhập ít nhất 10 ký tự'
            },
            'confirm-password': {
                required: 'ConfirPassword và Password của bạn không giống nhau ',
            },
            address: {
                required: 'Vui lòng nhập địa chỉ của bạn',
            },
            phone: {
                required: 'Vui lòng nhập số điện thoại của bạn',
                minlength: 'Số điện thoại quá ngắn, ít nhất 10 con số ',
                maxlength: 'Số điện thoại quá dài, nhiều nhất 11 con số',
            },
        },
    },
    submitHandler: function(form, event){
        event.preventDefault();
        var senderObject = {
            firstName: $(form['firstName']).val(),
            lastName: $(form['lastName']).val(),
            password: $(form['password']).val(),
            address: $(form['address']).val(),
            phone: $(form['phone']).val(),
            avatar: $(form['avatar']).val(),
            gender: $(form['gender']).val(),
            email: $(form['email']).val(),
            birthday: $(form['birthday']).val(),
        };
        $.ajax({
            url: REGISTER_API,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            success: function () {
                console.log('success');
                console.log(data);
                console.log('-----');
                console.log(data.responseText);
                console.log('-----');
                console.log(textStatus);
                console.log('-----');
                console.log(jqXHR);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (Object,keys(jqXHR.responseJSON.error).length > 0) {
                    $('#summary')
                        .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`)
                    validator.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    },
});
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}