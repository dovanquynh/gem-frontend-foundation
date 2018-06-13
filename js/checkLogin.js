// Regex
const REGEX_USERNAME = /^([a-zA-z]+)$/;
const REGEX_PASSWORD = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!\"#'$%&()=~|\\/]).{6,16})$/;


//
function dataAjax({ url, action, data }) {
    //Khoi tao doi tuong
    var xhttp = new XMLHttpRequest();
    var mss = '';
    //cau hinh request
    xhttp.open(action, url, true);
    xhttp.responseType = 'json';
    //Bat su kien thay doi trang thai cua request
    xhttp.onreadystatechange = function() {
        // console.log(this.readyState)
        //Kiem tra neu nhu da gui request thanh cong
        if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
            var response = this.response;



            response.forEach((user) => {
                const { password, username } = user;
            if (data.password == password && data.username == username) {
                mss = 'Thanh cong';
                break;
            }
            else {
                mss = 'That bai';

            }

            console.log(mss);
            });

        }
    }

    //gui request
    xhttp.send();
}




function checkRegx(value, regx) {
    return regx.test(value);
}

function showError(element, error) {
    element.classList.add('is-invalid');
    element.nextElementSibling.innerText = error;
    var usernameErr = document.getElementById('username-error');
    usernameErr.style.display = "block";
    var passwordErr = document.getElementById('password-error');
    passwordErr.style.display = "block";
}
function hiddenUsernameError(){
    var usernameErr = document.getElementById('username-error');
    usernameErr.style.display = "none";
}
function hiddenPasswordError(){
    var passwordErr = document.getElementById('password-error');
    passwordErr.style.display = "none";
}


