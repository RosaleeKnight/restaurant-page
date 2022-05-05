function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About';
  
    about.appendChild(title);
  
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    about.appendChild(para);
    return about;
}
  
function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}
  
function loadHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
  
    content.textContent = '';
  
    const aboutSection = createAboutSection();
  
    setBtnActive('home');
  
    content.appendChild(aboutSection);
}
  
export default loadHome;