function decryptMessage() {
    const encrypted =
        document.getElementById("encryptedText").value;

    const password =
        document.getElementById("password").value;

    try {
        const bytes =
            CryptoJS.AES.decrypt(encrypted, password);

        const original =
            bytes.toString(CryptoJS.enc.Utf8);

        if (!original) {
            throw new Error();
        }

        document.getElementById("result").innerText =
            "✅ " + original;

    } catch {
        document.getElementById("result").innerText =
            "❌ Wrong password or invalid data";
    }
}
