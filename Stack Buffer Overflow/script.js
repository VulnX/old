window.onscroll = function() { updateScrollBar() };
function updateScrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
if (checkCookie("cookiePromptShown")) {
  if (getCookie("cookiePromptShown") == "yes") {
  document.getElementById("cookieBar").style.display = "none";
  }
}
if (!(checkCookie("cookiePromptShown"))) {
  document.getElementById("cookieBar").style.display = "flex";
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("logo").setAttribute("src", profile.getImageUrl());
    var name = profile.getName();
    var email = profile.getEmail();
    var profileUrl = profile.getImageUrl();
    setCookie("username", name, 1);
    setCookie("email", email, 1);
    setCookie("profileUrl", profileUrl, 1)
    document.getElementById("logo").style.cursor = "pointer";
    document.getElementById("logo").style.borderRadius = "50%";
}
function signOut() {
    var x = gapi.auth2.getAuthInstance();
    x.signOut();
    x.disconnect();
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "profileUrl=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
    'onfailure': onFailure
  });
}
function setCookie(cname, cvalue, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function reveal() {
  if (checkCookie("username")) {
    if (document.getElementById("pop").style.display == "flex") {
    document.getElementById("pop").style.display = "none";
    } else {
    document.getElementById("pop").style.display = "flex";
    }
  }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
  }
  else {
    return true;
  }
}
function delay(URL) {
  setTimeout(function() { window.location = URL }, 700);
}
function hideCookieBar() {
  setCookie("cookiePromptShown", "yes", 30);
  document.getElementById("cookieBar").style.display = "none";
}