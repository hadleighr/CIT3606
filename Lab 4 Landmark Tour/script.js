
function changeImage(imagefile) {
    document.getElementById("landmark").src = imagefile;
}

function resizeImage() {
    const selectedSize = document.getElementById("landmark").value;
    const image = document.getElementById("landmark");
    if (selectedSize === "small") {
        image.style.width = "400px";
    } else if (selectedSize === "medium") {
        image.style.width = "600px";
    } else if (selectedSize === "large") {
        image.style.width = "800px";
    }
}