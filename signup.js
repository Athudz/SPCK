let register_form = document.getElementById('form');

register_form.addEventListener('submit', function (e) {
    e.preventDefault();
    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;
    let repassword = document.querySelector('.repassword-input').value;
    let name = document.querySelector('.name-input').value;
    let date = document.querySelector('.date-input').value;


    // Lấy data từ local storage
    let user_email_list = localStorage.getItem("user_email_list");
    user_email_list = JSON.parse( user_email_list );

    let user_password_list = localStorage.getItem("user_password_list");
    user_password_list = JSON.parse( user_password_list );
    
    let user_name_list = localStorage.getItem("user_name_list");
    user_name_list = JSON.parse( user_name_list );

    let user_date_list = localStorage.getItem("user_date_list");
    user_date_list = JSON.parse( user_date_list );

    if ( email == '' || password == '' || repassword == '' || name == '' || date == '') {
        noti( 'Please Complete All Information', email, password, repassword, name, date, 0 );
        return;
    }

    if ( password != repassword ) {
        noti( 'Passwords Do Not Match', email, password, repassword, name, date, 0 );
        return;
    }

    if ( user_email_list == null && user_password_list == null ) {
        user_email_list = [email];
        user_password_list = [password];
        user_name_list = [name];
        user_date_list = [date];
        localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
        localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
        localStorage.setItem( "user_name_list", JSON.stringify(user_name_list) );
        localStorage.setItem( "user_date_list", JSON.stringify(user_date_list) );
        noti( 'Sign Up Success', email, password, repassword, name, date, 1 );
    } else {
        for( key in user_email_list ) {
            if ( email == user_email_list[key] ) {
                noti( 'Email Already Exists', email, password, repassword, name, date, 0 );
                return;
            }
        }
        user_email_list.push(email);
        user_password_list.push(password);
        user_name_list.push(name);
        user_date_list.push(date);
        localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
        localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
        localStorage.setItem( "user_name_list", JSON.stringify(user_name_list) );
        localStorage.setItem( "user_date_list", JSON.stringify(user_date_list) );
        noti( 'Sign Up Success', email, password, repassword, name, date, 1 );
        
    }
})

function noti( message, email, password, repassword,  name, date, status ) {
    document.querySelector('.email-input').value = email;
    document.querySelector('.password-input').value = password;
    document.querySelector('.repassword-input').value = repassword;
    document.querySelector('.name-input').value = name;
    document.querySelector('.date-input').value = date;
    let noti = document.getElementById('noti-mess')
    noti.innerHTML = message;
    if ( status == 1 ) {
        noti.style.color = '#00ff26';
        document.querySelector('.email-input').value = '';
        document.querySelector('.password-input').value = '';
        document.querySelector('.repassword-input').value = '';
        document.querySelector('.name-input').value = '';
        document.querySelector('.date-input').value = '';
    } else {
        noti.style.color = '#ff7700';
    }
    noti.style.opacity = 1;

}