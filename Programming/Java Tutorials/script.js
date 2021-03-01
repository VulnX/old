function x() {
    if (document.getElementsByClassName('code')) {
        for (var i = 0; i < document.getElementsByClassName('code').length; i++) {
            if (document.getElementsByClassName('code')[i].getAttribute('data-code-type')) {
                if (document.getElementsByClassName('code')[i].getAttribute('data-code-type').localeCompare('JavaSnippet') == 0) {
                    document.getElementsByClassName('code')[i].innerHTML = '<span class="blue">class</span> <span class="green">Program</span> {\n    <span class="red">public static</span> <span class="blue">void</span> <span class="green">main</span>(<span class="blue">String</span><span class="red">[]</span> <span class="orange">args</span>) {\n        ' + document.getElementsByClassName('code')[i].innerHTML + '\n    }\n}';
                }
            }
        }
        loadFooter();
    }

    if (document.getElementById('contactParagraph')) {
        document.getElementById('contactParagraph').innerHTML = '<h2>CONTACT</h2>I hope you were able to understand everything from this tutorial. If you have any doubts or confusions, feel free to reach out to me on my <a href="https://www.instagram.com/vulnx_hacking/" class="link">Instagram</a> or you can mail me at <a href="mailto:vulnx101@gmail.com" class="link">vulnx101@gmail.com</a>, alternatively you can fill <a href="https://docs.google.com/forms/d/e/1FAIpQLScM7cjnyriiDIwM_8wFkS66cueS83lOaDoSsJ6dlM39szevcg/viewform?usp=sf_link" class="link">this</a> form and we will get back to you as soon as possible.';
    }
}

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