function getCookie(cookieName) {
    if (!cookieName) 
    {
        console.error("Cookie name is required");
        return;
    }
    console.log(`cookie = ${document.cookie}`)
    var cookies = document.cookie.split(";");
    for (var cookie of cookies) {
        var [name, value] = cookie.trim().split("=");
        if (name === cookieName) {
            return value;
        }
    }
    return null;
}

function setCookie(cookieName, cookieValue, expiryDate) {
    if (!cookieName || !cookieValue) {
        console.error("Cookie name and value are required");
        return;
    }
    if (expiryDate) {
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate.toUTCString();
    } else {
        document.cookie = cookieName + "=" + cookieValue;    // session cookie  
    }
}

function deleteCookie(cookieName) {
    if (!cookieName) {
        console.error("Cookie name is required");
        return;
    }
    var date = new Date();
    date.setMonth(date.getMonth() - 1);
    document.cookie = cookieName + "=;expires=" + date.toUTCString();
}

function allCookieList() {
    var cookies = document.cookie.split(";");
    var cookieList = [];
    for (var cookie of cookies) {
        if (cookie.trim() !== "") {
            cookieList.push(cookie.trim());
        }
    }
    return cookieList;
}

