function generateQR() {
    let text = document.getElementById("text").value;

    if (!text) {
        alert("Please enter text OR URL!");
        return;
    }

    // Random string add karna for uniqueness
    let random = Date.now();  // ya Math.random()
    let data = text + "?" + random;

    let qr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
             + encodeURIComponent(data);

    document.getElementById("qrBox").innerHTML = "<img src='" + qr + "' />";
}
