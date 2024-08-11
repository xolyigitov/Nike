const menuBtn = document.querySelector('.menu-btn'),
  navigation = document.querySelector('.nav-menu');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  navigation.classList.toggle('active')
})