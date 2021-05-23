import menu from './menu.json';
import menuElTpl from './templates/menu_el.hbs';

const refs = {
  themeSwitch: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
  listMenu: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeSwitch.addEventListener('change', changeTheme);
refs.listMenu.insertAdjacentHTML('beforeend', menuElTpl(menu));

if (!localStorage.currentTheme) {
  refs.body.classList.add(`${Theme.LIGHT}`);
} else {
  refs.body.classList = localStorage.getItem('currentTheme');
}

function changeTheme(e) {
  if (e.target.checked) {
    localStorage.setItem('currentTheme', `${Theme.DARK}`);
  } else {
    localStorage.setItem('currentTheme', `${Theme.LIGHT}`);
  }

  refs.body.classList = localStorage.getItem('currentTheme');
}
