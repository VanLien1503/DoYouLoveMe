let randomSource = "image/image4.jpg";

function randomImage() {
    let arrImg = ["image/image4.jpg",
        "image/image5.jpg",
        "image/image6.jpg",
        "image/image7.png",
        "image/image1.jpg",
        "image/image2.jpg",
        "image/image3.jpg",
        "image/image8.jpg",
        "image/image9.jpg",
        "image/image10.jpg"
    ];
    let imageRandom = Math.floor(Math.random() * arrImg.length);
    document.getElementById("image").src = arrImg[imageRandom];
    randomSource = arrImg[imageRandom];
}

function yesClick() {

    console.log(randomSource);
    let arrImgXau = [
        "Xau/1.jpg",
        "Xau/2.jpg",
        "Xau/3.jpg",
        "Xau/4.jpg",
    ];
    arrImgXau.push(randomSource);
    if (confirm("Bạn Có Chắc Về Lựa Trọn..??")) {
        let imgXaurandom = Math.floor(Math.random() * arrImgXau.length);
        document.getElementById("image").src = arrImgXau[imgXaurandom];
        document.getElementById("text").innerHTML = "<h2>Chúng Ta Bắt Đầu Hẹn Hò :D</h2>"
    } else {
        alert("Tạm Biệt Hẹn Gặp Lại")
    }
}

function Nohover() {
    let red = parseInt(255 * Math.random());
    let green = parseInt(255 * Math.random());
    let blue = parseInt(255 * Math.random());
    let color = `rgb(${red},${green},${blue})`;
    let x = Math.round(Math.random() * 300);
    let y = Math.round(Math.random() * 300);
    document.getElementById("mover").style.background = color;
    document.getElementById('mover').style.left = x + 'px';
    document.getElementById('mover').style.top = y + 'px';
    document.getElementById('moverYes').style.left = x + Math.floor(Math.random() * 100) + 50 + 'px';
    document.getElementById('moverYes').style.top = y + Math.floor(Math.random() * 100) + 50 + 'px';

}