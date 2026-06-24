<script>

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

function openModal(element){

    const img = element.querySelector("img");

    modal.style.display = "flex";

    modalImage.src = img.src;
    modalImage.alt = img.alt;
}

document.querySelector(".close-modal")
.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        modal.style.display = "none";

    }

});

</script>