
function changeImage(imagefile, description, map) {
    document.getElementById("landmark").src = imagefile;
    document.getElementById("description").innerHTML = description;
    document.getElementById("map").src = map
}

function resizeImage() {
    const selectedSize = document.getElementById("menu").value;
    const image = document.getElementById("landmark");
    if (selectedSize === "small") {
        image.style.width = "400px";
    } else if (selectedSize === "medium") {
        image.style.width = "600px";
    } else if (selectedSize === "large") {
        image.style.width = "800px";
    }
}