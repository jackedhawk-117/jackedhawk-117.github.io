const text = "Building Secure Systems...";
let i = 0;

function type() {
    if (i < text.length) {
        document.querySelector("header p").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

document.querySelector("header p").innerHTML = "";
type();
