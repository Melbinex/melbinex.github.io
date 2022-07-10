$('#najnowsze-naglowki').vTicker('init', {
  speed: 800,
  pause: 4000,
  showItems: 1,
  padding: 1
});

const gallery = document.querySelector('#gallery')

const galleryItems = [
  {
    title: 'Familio',
    subTitle: 'App concept, Behance',
  },
  {
    title: 'WePay',
    subTitle: 'Shopping app, Behance',
  },
  {
    title: 'Smart home',
    subTitle: 'Shots, Behance',
  },
  {
    title: 'S.G. museum',
    subTitle: 'Landing page, Tilda',
  }
]
console.log('galleryItems');
galleryItems.map((item, index) => {

  gallery.innerHTML += `
      <div class="gallery_${index+1} gallery_all">
          <p class="gallery_tittle">${item.title}</p>
          <p class="gallery__${index+1}_description gallery_description_all">${item.subTitle}</p>
      </div>
    `
})