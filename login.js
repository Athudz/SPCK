let login_form = document.getElementById('form');
if ( login_form !== '' ) {
    login_form.addEventListener('submit', function () {
        // lấy input
        let email = document.querySelector('.email-input').value;
        let password = document.querySelector('.password-input').value;
    
        // Lấy data từ local storage
        let user_email_list = localStorage.getItem("user_email_list");
        user_email_list = JSON.parse( user_email_list );
    
        let user_password_list = localStorage.getItem("user_password_list");
        user_password_list = JSON.parse( user_password_list );
    
        for( key in user_email_list ) {
            if ( email == user_email_list[key] && password == user_password_list[key] ) {
                alert('Login Success');
            }
        }
    
        alert("Login Unsuccessful");
    })
}