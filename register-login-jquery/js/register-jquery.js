// $('#register-form').validate({
//     rules:{
//         firstName: {
//             required: true,
//             minLength: 2,
//             maxLength: 15
//         },
//         lastName: {
//             required: true,
//             minLength: 2,
//             maxLength: 15
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         password:{
//             required: true,
//             minLength: 2,
//             maxLength: 15
//         },
//         'confirm-password':{
//             equaTo: '[name="password"]'
//         }
//     },
//     messages:{
//         firstName: {
//             required: 'Vui lòng nhập tên của bạn.',
//             minLength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxLength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         lastName: {
//             required: 'Vui lòng nhập họ của bạn.',
//             minLength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxLength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         email: {
//             required: 'Vui lòng nhập email của bạn.',
//             email: 'Vui lòng nhập email đúng định dạng',
//         },
//         password:{
//             required: 'Vui lòng nhập password của bạn.',
//             minLength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
//             maxLength: 'Password dài, vui lòng nhập nhiều nhất {0} ký tự',
//         },
//         'confirm-password':{
//             equaTo: 'Password và confirm không giống nhau.'
//         }
//     }
// });


$('#register-form').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        }
    },
    messages: {
        firstName: {
            required: 'Vui lòng nhập tên của bạn.',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        lastName: {
            required: 'Vui lòng nhập họ của bạn.',
            minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        email: {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        password: {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'confirm-password': {
            equalTo: 'Password và confirm không giống nhau.'
        }
    }
});
