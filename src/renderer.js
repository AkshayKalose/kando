//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//     |  /  __|   \ |       _ \   _ \     This file belongs to Ken-Do, the truly       //
//     . <   _|   .  | ____| |  | (   |    amazing cross-platform marking menu.         //
//    _|\_\ ___| _|\_|      ___/ \___/     Read more on github.com/ken-do-menu/ken-do   //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: MIT

import './index.scss';

document.querySelector('#close-button').addEventListener('click', () => {
  window.api.hideWindow();
});

document.querySelector('#dev-tools-button').addEventListener('click', () => {
  window.api.showDevTools();
});

document.querySelector('#shortcut-button').addEventListener('click', () => {
  window.api.simulateShortcut();
});

document.addEventListener('keyup', ev => {
  if (ev.key === 'Escape') {
    window.api.hideWindow();
  }
});

let thing = document.querySelector('#thing');

thing.addEventListener('click', () => {
  window.api.itemSelected();
});

window.api.showMenu((a, pos) => {
  document.querySelector('body').classList.add('visible');
  thing.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
});

window.api.setWindowInfo((a, info) => {
  document.querySelector('#window-info').textContent = `${info.name} (${info.wmClass})`;
});

// document.addEventListener('mousemove', ev => {
//   document.querySelector('body').classList.add('visible');
//   thing.style.transform = `translate(${ev.x}px, ${ev.y}px)`;
// });