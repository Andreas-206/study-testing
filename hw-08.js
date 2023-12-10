const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];




const gallery = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");

  const link = document.createElement("a");
  link.classList.add("gallery-link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery-image");
  image.src = preview;
  image.setAttribute("data-source", original);
  image.alt = description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const url = event.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${url}" width="1112" height="640">
`);

  modal.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  });
}

function newGallery() {
  const galleryItems = images.map(createGalleryItem);
  gallery.append(...galleryItems);
  gallery.addEventListener("click", onGalleryClick);
}

newGallery();

// const galleryContainer = document.querySelector(".gallery");

// function createGalleryItem({ preview, original, description }) {
//   const galleryItem = document.createElement("li");
//   galleryItem.classList.add("gallery-item");

//   const link = document.createElement("a");
//   link.classList.add("gallery-link");
//   link.href = original;

//   const image = document.createElement("img");
//   image.classList.add("gallery-image");
//   image.src = preview;
//   image.setAttribute("data-source", original);
//   image.alt = description;

//   link.appendChild(image);
//   galleryItem.appendChild(link);

//   return galleryItem;
// }

// function onGalleryItemClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const largeImageURL = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${largeImageURL}" width="800" height="600">
// `);

//   instance.show();

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// }

// function renderGallery() {
//   const galleryItems = images.map(createGalleryItem);
//   galleryContainer.append(...galleryItems);
//   galleryContainer.addEventListener("click", onGalleryItemClick);
// }

// renderGallery();

// const gallery = document.querySelector(".gallery");

// const galleryHTML = images.map(({ preview, original, description }) =>
// `<li class="gallery-item">
//     <a class="gallery-link" href="${original}">
//       <img
//         class="gallery-image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </li>`
//   ).join("");

// gallery.innerHTML = galleryHTML;

// gallery.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") return;

//   const htmlItem = `<div class="modal-window">
//     <img src="${event.target.dataset.source}">
//   </div>`;

//   const modal = basicLightbox.create(htmlItem, {
//     onShow: () => {
//       document.addEventListener("keydown", onKeyDown);
//       console.log("OPEN");
//     },
//     onClose: () => {
//       document.removeEventListener("keydown", onKeyDown);
//       console.log("CLOSE");
//     },
//   });

//   modal.show();
// }

// function onKeyDown(event) {
//   if (event.key === "Escape") {
//     basicLightbox.close();
//   }
// }

// const gallery = document.querySelector(".gallery");

// const elements = images.reduce(
//   (htmlTotal, image) =>
//     htmlTotal +
//     `<li class="gallery-item">
//       <a class="gallery-link" href="${image.original}">
//         <img
//           class="gallery-image"
//           src="${image.preview}"
//           data-source="${image.original}"
//           alt="${image.description}"
//         />
//       </a>
//     </li>`,
//   ""
// );

// gallery.insertAdjacentHTML("afterbegin", elements);

// gallery.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") return;

//   const htmlItem = `<div class="mobile-window">
//     <img src="${event.target.dataset.source}">
//   </div>`;

//   const modal = basicLightbox.create(htmlItem, {
//     onShow: () => {
//       document.addEventListener("keydown", onKeyDown);
//       console.log("OPEN");
//     },
//     onClose: () => {
//       document.removeEventListener("keydown", onKeyDown);
//       console.log("CLOSE");
//     },
//   });

//   modal.show();
// }

// function onKeyDown(event) {
//   if (event.key === "Escape") {
//     basicLightbox.close();
//   }
// }

// const gallery = document.querySelector(".gallery");

// const galleryMarkup = images.map(
//     ({ preview, original, description }) =>
//     `<li class="gallery-item">
//     <a class="gallery-link" href="${original}">
//       <img class="gallery-image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}" />
//     </a>
//     </li>`).join("");

// gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// gallery.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   const imageEl = event.target.classList.contains("gallery-image");

//   if (!imageEl) {
//     return;
//   }

//   const imageUrl = event.target.dataset.source;
//   openModal(imageUrl);
// }

// function openModal(url) {
//   const modal = basicLightbox.create(`
//     <img src="${url}" width="1112" height="640">
//   `);

//   modal.show();
//   console.log();
// }

// document.addEventListener("keydown", onKeyDown);

// function onKeyDown(event) {
//   if (event.key === "Escape") {
//     closeModal();
//   }
// }

// function closeModal() {
//   basicLightbox.close();
// }

// const gallery = document.querySelector('.gallery');
// const elements = images.reduce(
//   (htmlTotal, image) =>
//     htmlTotal +
//     `<li class="gallery-item">
//   <a class="gallery-link" href="${image.original}">
//     <img
//       class="gallery-image"
//       src="${image.preview}"
//       data-source="${image.original}"
//       alt="${image.description}"
//     />
//   </a>
// </li>`,
//   '',
// );
// gallery.insertAdjacentHTML('afterbegin', elements);
// gallery.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') return;
//   const htmlItem = `<div class = "mobil-window">
//             <img src="${event.target.dataset.source}">
//     </div>`;
//   gallery.removeEventListener('click', event);
//   const instance = basicLightbox.create(htmlItem, {
//     onShow: instance => {
//       gallery.addEventListener('click', event);
//       event.preventDefault();
//       console.log(`OPEN`);
//     },
//     onClose: instance => {
//       gallery.removeEventListener(`click`, event), console.log('CLOSE');
//       document.removeEventListener(`keydown`, event),
//         console.log('CLOSE ESC keydown');
//     },
//   });
//   instance.show(instance => console.log(' SHOW'));
//   document.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   });
// });
// 9:34
// Проще .наверно кусок кода: const instance = basicLightbox.create(htmlItem, {
//     onShow: instance => {
//       gallery.addEventListener('click', event);
//       event.preventDefault();
//       console.log(`OPEN`);
//     },
//     onClose: instance => {
//       gallery.removeEventListener(`click`, event), console.log('CLOSE');
//       document.removeEventListener(`keydown`, event),
//         console.log('CLOSE ESC keydown');
//     },
//   });
//   instance.show(instance => console.log(' SHOW'));
//   document.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   });
