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

const cornerCodeToSpeffz = {
    "a11": "A",
    "a13": "B",
    "a17": "D",
    "a19": "C",
    "a21": "U",
    "a23": "V",
    "a27": "X",
    "a29": "W",
    "a31": "E",
    "a33": "F",
    "a37": "H",
    "a39": "G",
    "a41": "M",
    "a43": "N",
    "a47": "P",
    "a49": "O",
    "a51": "I",
    "a53": "J",
    "a57": "L",
    "a59": "K",
    "a61": "Q",
    "a63": "R",
    "a67": "T",
    "a69": "S"
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

function setChichu() {
    for (const i in cornerCodeToCustom) {
        byid(i).value = cornerCodeToCustom[i];
        setCookie(i, byid(i).value, 30);
    }
}

function setSpeffz() {
    for (const i in cornerCodeToSpeffz) {
        byid(i).value = cornerCodeToSpeffz[i];
        setCookie(i, byid(i).value, 30);
    }
}