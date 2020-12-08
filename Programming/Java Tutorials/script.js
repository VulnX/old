window.onscroll = function() { updateScrollBar() };

window.onload = function() {
    if (!(checkCookie("cookiePromptShown"))) {
        document.getElementById('cookieBar').style.display = "flex";
    }
}

function updateScrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

function setCookie(cname, cvalue, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var username = getCookie(cname);
    if (username == "") {
        return false;
    } else {
        return true;
    }
}
window.onload = function() {
    if (checkCookie("cookiePromptShown")) {
        if (getCookie("cookiePromptShown") == "yes") {
            document.getElementById("cookieBar").style.display = "none";
        }
    }
    if (!(checkCookie("cookiePromptShown"))) {
        document.getElementById("cookieBar").style.display = "flex";
    }
}

function delay(URL) {
    setTimeout(function() { window.location = URL }, 700);
}

function hideCookieBar() {
    setCookie("cookiePromptShown", "yes", 30);
    document.getElementById("cookieBar").style.display = "none";
}