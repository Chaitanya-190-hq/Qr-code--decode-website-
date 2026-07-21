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
}
