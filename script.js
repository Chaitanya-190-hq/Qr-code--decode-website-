function generateQR() {
    const msg = document.getElementById("message").value;
    const password = document.getElementById("password").value;

    if (!msg || !password) {
        alert("Enter message and password");
        return;
    }

    const encrypted =
        CryptoJS.AES.encrypt(msg, password).toString();

    document.getElementById("encryptedBox").innerText =
        encrypted;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: encrypted,
        width: 256,
        height: 256
    });

    document.getElementById("downloadBtn").style.display =
        "inline-block";
}l
function downloadQR() {
    const img = document.querySelector("#qrcode img");
    const canvas = document.querySelector("#qrcode canvas");

    let url;

    if (img) {
        url = img.src;
    } else if (canvas) {
        url = canvas.toDataURL("image/png");
    } else {
        alert("No QR code found!");
        return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = "ChaiQR.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    }
}
