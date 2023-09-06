// scrolled Page chenge header style
const header=document.getElementById('header')
window.onscroll = () => window.scrollY > 20 ? headerScrolledPageOn() : headerScrollerPageOff()

function headerScrolledPageOn() {
  const menuSvg=document.getElementById('menuSvg')
  const menuSvgImg=document.getElementById('menuSvgImg')
  header.classList.add('scrolledPage')
  menuSvg.classList.add('scrolledPage')
  menuSvgImg.classList.remove('imgFilter')
  menuSvgImg.classList.add('imgFilterGray')
}
function headerScrollerPageOff() {
  const menuSvg=document.getElementById('menuSvg')
  const menuSvgImg=document.getElementById('menuSvgImg')
  header.classList.remove('scrolledPage')
  menuSvg.classList.remove('scrolledPage')
  menuSvgImg.classList.remove('imgFilterGray')
  menuSvgImg.classList.add('imgFilter')
}
// Menu click 
const menuSvg=document.getElementById('menuSvg')
menuSvg.addEventListener('click',showMenuPanel)
// toggle show,hide menu panel
function showMenuPanel() {
  const menuCont=document.getElementById('menuCont')
  const insideCont=document.getElementById('insideCont')
  const closeMenuCont=document.getElementById('closeMenuCont')
  menuCont.classList.toggle('activeMobile')
  insideCont.classList.toggle('activeMobile')
  closeMenuCont.classList.toggle('activeMobile')
  closeMenuCont.addEventListener('click',hideMenuPanel)
  return
}
function hideMenuPanel() {
  const menuCont=document.getElementById('menuCont')
  const insideCont=document.getElementById('insideCont')
  const closeMenuCont=document.getElementById('closeMenuCont')
  setTimeout(() => {
    closeMenuCont.classList.toggle('activeMobile')
    setTimeout(() => {
      insideCont.classList.toggle('activeMobile')
      setTimeout(() => {
        menuCont.classList.toggle('activeMobile')
      }, 200);
    }, 200);
  }, 200);

 
  return
}
// smooth scroll Termékeink btn click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});