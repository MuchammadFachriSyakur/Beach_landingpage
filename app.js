const toggle = document.querySelector(".container .home .navbar .toggle");
toggle.addEventListener("click", (e)=>{
  const link_list = document.querySelector(".container .home .navbar .list_link");
  link_list.classList.toggle('aktif');
});
const navbar = document.querySelector(".container .home .navbar");

window.addEventListener("scroll", (e)=>{
  if(window.scrollY > 5){
    navbar.classList.add('bg_aktif');
  }else{
    navbar.classList.remove('bg_aktif');
  }
  
  const card_kategori = document.querySelectorAll(".container .kategori .card");
  card_kategori.forEach((e)=>{
    const animation = window.innerHeight > e.getBoundingClientRect().top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
  
  const beach_card = document.querySelectorAll(".container .list_beach .card_beach");
  beach_card.forEach((e)=>{
    const animation = window.innerHeight > e.getBoundingClientRect().top ? e.classList.add('aktif') : e.classList.remove('aktif');
  });
});

const anchor_in_full = document.querySelector(".container .home .page .text .in_full");
window.addEventListener("DOMContentLoaded", (e)=>{
  const home_image1 = document.querySelector(".container .home .page .image .img-content.one");
  const title_home_page = document.querySelector(".container .home .page .text .title");
  const description_home_page = document.querySelector(".container .home .page .text .description");
  anchor_in_full.classList.toggle('slide');
  home_image1.classList.toggle('aktif');
  title_home_page.classList.toggle('aktif');
  description_home_page.classList.toggle('aktif');
});

anchor_in_full.addEventListener("click", (e)=>{
  e.preventDefault();
  e.classList.toggle('aktif');
})