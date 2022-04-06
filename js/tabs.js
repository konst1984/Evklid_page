document.addEventListener('DOMContentLoaded', function() {
 document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
         tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path
          

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
              tabContent.classList.remove('tab-content-active')
             })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
       })
    })
})


window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#icon-search').addEventListener('click', function() {
    document.querySelector('#form-search').classList.toggle('visin')
  })
})



window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-list').classList.toggle('burger-visin')
  })
})








const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var acc = document.getElementsByClassName("accordion-move");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

