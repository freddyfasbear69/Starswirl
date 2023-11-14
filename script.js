//function name must have a small letter for first word and big letter for second

function toAbout(){
    window.location="about us.html";
}

function toGallery(){
    window.location = "GALLERY_PAGE.html";
}

function toEarrings(){
    window.location = "Earrings.html";
}

function toBracelets(){
    window.location = "Bracelets.html";
}

function toWatch(){
    window.location = "Watch.html";
}

function toRings(){
    window.location = "Rings.html";
}

function toPendants(){
    window.location = "Pendants.html";
}

function toNecklace(){
    window.location = "Necklace.html";
}

function toIndex(){
    window.location = "Index.html";
}

function cart(){
    if (confirm("Add this item to your cart?") == true) {
        alert("Successfully added to cart!");
        } else {
        alert("This item was not added to your cart.");
        }
}
