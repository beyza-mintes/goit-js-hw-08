const images = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const container = document.querySelector(".gallery")

for (const image of images) {

    const { preview, original, description } = image;

    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery-item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery-link");
    galleryLink.href = original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery-image");
    galleryImage.src = preview;
    galleryImage.dataset.source = original;
    galleryImage.alt = description;

    galleryImage.style.width = "360px"
    galleryImage.style.height = "200px"

    container.appendChild(galleryItem);
    galleryItem.appendChild(galleryLink);
    galleryLink.appendChild(galleryImage);
}

container.addEventListener("click", selectImage);
function selectImage(event) {

    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();

    const originalImage = event.target.dataset.source;
    console.log(originalImage);

    const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
    `); // basicLightbox kütüphanesi ile bir modal oluşturuyoruz, büyük resmi içine ekliyoruz.

    instance.show(); // oluşturulan modalı gösteriyoruz.

    // escape tuşuna basıldığında modalı kapatacak fonksiyon tanımlıyoruz.
    const closeModal = (event) => {
        if (event.key === "Escape") {
            instance.close(); // modal kapanır
            document.removeEventListener("keydown", closeModal); //keydown dinleyicisini kaldırıyor
        }
    }

    // klavye tuşlarını dinlemek için
    document.addEventListener("keydown", closeModal)
}






