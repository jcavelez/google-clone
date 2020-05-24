
var profile_icon = document.querySelector(".nav-menu__photo");
var profile_frame = document.querySelector('.profile-container');

var apps_icon = document.querySelector(".nav-menu__icon");
var apps_frame = document.querySelector('.apps-container');

var body = document.querySelector("body");

profile_icon.addEventListener('click', profile_manager);
apps_icon.addEventListener('click', apps_manager);

function profile_manager() {
    if (!profile_frame.classList.contains('profile-container--hidden'))
    {
        profile_frame.classList.add('profile-container--hidden');
        console.log("abierto");
    }
    else {
        profile_frame.classList.remove('profile-container--hidden');
        console.log("cerrado");
    }
}


function apps_manager() {
    if (!apps_frame.classList.contains('apps-container--hidden'))
    {
        apps_frame.classList.add('apps-container--hidden');
        console.log("abierto");
    }
    else {
        apps_frame.classList.remove('apps-container--hidden');
        console.log("cerrado");
    }
}





