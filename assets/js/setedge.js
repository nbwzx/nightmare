"use strict";

const edgeCodeToCustom = {
    "a12": "E",
    "a14": "C",
    "a16": "G",
    "a18": "A",
    "a22": "I",
    "a24": "K",
    "a26": "O",
    "a28": "M",
    "a32": "D",
    "a34": "X",
    "a36": "T",
    "a38": "L",
    "a42": "H",
    "a44": "R",
    "a46": "Z",
    "a48": "P",
    "a52": "B",
    "a54": "S",
    "a56": "Q",
    "a58": "J",
    "a62": "F",
    "a64": "Y",
    "a66": "W",
    "a68": "N"
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
    for (const i in edgeCodeToCustom) {
        if (byid(i).value === ""){
            byid(i).value = edgeCodeToCustom[i];
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
    for (const i in edgeCodeToCustom) {
        setCookie(i, byid(i).value, 30);
    }
}