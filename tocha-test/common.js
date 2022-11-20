'use strict';

headerMenu();
function headerMenu() {

  let headerBurger = document.querySelector(".header-burger");
  let headerMenu = document.querySelector(".header__menu");
  headerBurger.onclick = function() {
    this.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
  }

}

sliders();
function sliders() {

  const tariffSl = new Swiper('.tariff-sl', {
    spaceBetween: 20,
    autoHeight: true,
    speed: 1000,
    pagination: {
      el: '.tariff-sl .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  const stepsSl = new Swiper('.steps-sl', {
    spaceBetween: 30,
    speed: 1000,
    pagination: {
      el: '.steps .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 180,
      },
    }
  });

  const reviewSl = new Swiper('.review-sl', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    pagination: {
      el: '.review .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
    }
  });

}

modal();
function modal() {

  let body = document.querySelector("body");
  let openModal = document.getElementsByClassName("open-modal");
  let formClose = document.getElementsByClassName("form__close");

  for (let i=0; i < openModal.length; i++) {
    openModal[i].onclick = function() {
      body.classList.add("modal-opened");
      let id = this.getAttribute("data-id");
      let el = document.getElementById(id);
      el.classList.add("_active");
    }
  }

  for (let i=0; i < formClose.length; i++) {
    formClose[i].onclick = function() {
      body.classList.remove("modal-opened");
      let parent = this.parentElement;
      parent.classList.remove("_active");
    }
  }

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmhlYWRlck1lbnUoKTtcclxuZnVuY3Rpb24gaGVhZGVyTWVudSgpIHtcclxuXHJcbiAgbGV0IGhlYWRlckJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWJ1cmdlclwiKTtcclxuICBsZXQgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpO1xyXG4gIGhlYWRlckJ1cmdlci5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJfYWN0aXZlXCIpO1xyXG4gICAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5zbGlkZXJzKCk7XHJcbmZ1bmN0aW9uIHNsaWRlcnMoKSB7XHJcblxyXG4gIGNvbnN0IHRhcmlmZlNsID0gbmV3IFN3aXBlcignLnRhcmlmZi1zbCcsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLnRhcmlmZi1zbCAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgMTQ0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3RlcHNTbCA9IG5ldyBTd2lwZXIoJy5zdGVwcy1zbCcsIHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3RlcHMgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgICAgMTQ0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxODAsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJldmlld1NsID0gbmV3IFN3aXBlcignLnJldmlldy1zbCcsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLnJldmlldyAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDI0LFxyXG4gICAgICB9LFxyXG4gICAgICAxNDQwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDI2LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxubW9kYWwoKTtcclxuZnVuY3Rpb24gbW9kYWwoKSB7XHJcblxyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgbGV0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcGVuLW1vZGFsXCIpO1xyXG4gIGxldCBmb3JtQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybV9fY2xvc2VcIik7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaSA8IG9wZW5Nb2RhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgb3Blbk1vZGFsW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlbmVkXCIpO1xyXG4gICAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpPTA7IGkgPCBmb3JtQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGZvcm1DbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5lZFwiKTtcclxuICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=
