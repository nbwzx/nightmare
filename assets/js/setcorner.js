"use strict";

const cornerCodeToCustom = {
    "a11": "D",
    "a13": "G",
    "a17": "A",
    "a19": "J",
    "a21": "W",
    "a23": "X",
    "a27": "O",
    "a29": "R",
    "a31": "E",
    "a33": "C",
    "a37": "Q",
    "a39": "M",
    "a41": "K",
    "a43": "I",
    "a47": "Z",
    "a49": "S",
    "a51": "B",
    "a53": "L",
    "a57": "N",
    "a59": "Y",
    "a61": "H",
    "a63": "F",
    "a67": "T",
    "a69": "P"
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toGMTString()}`;
    document.cookie = `${cname}=${cvalue};${expires};`;
}

function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.onload = function onload() {
    for (const i in cornerCodeToCustom) {
        if (byid(i).value === ""){
            byid(i).value = cornerCodeToCustom[i];
        }
        if (getCookie(i) === ""){
            setCookie(i, byid(i).value, 30);
        } else {
            byid(i).value = getCookie(i);
        }
    }
};

function byid(id) {
    return document.getElementById(id);
}

function setAll() {
    for (const i in cornerCodeToCustom) {
        setCookie(i, byid(i).value, 30);
    }
}