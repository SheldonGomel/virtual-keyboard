let lang = 'ru';
const keysObj = {
  ru: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']],
  ruCaps: [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']],
  en: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']],
  enCaps: [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']],
  keyCodes: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
    'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
};
  // let keybrd = [];
// document.onkeypress = function (ev) {
//   keybrd.push(ev.charCode);
//   console.log(keybrd);
// }
const main = document.createElement('main');
const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  document.body.appendChild(header);
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'RSS Virtual Keyboard';
  header.appendChild(title);

  document.body.appendChild(main);
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  main.appendChild(textArea);
  // const keyboardBlock = document.createElement('div');
  // keyboardBlock.classList.add('keyboard-wrapper');
  // main.appendChild(keyboardBlock);
  addKeyboard();
};

function createButton(value) {
  const button = document.createElement('div');
  button.classList.add('key');
  button.classList.add(value);
  let symbol;
  switch (value) {
    case 'Up': symbol = '▲'; break;
    case 'Down': symbol = '▼'; break;
    case 'Left': symbol = '◄'; break;
    case 'Right': symbol = '►'; break;
    default: symbol = value;
  }
  button.innerHTML = `<span>${symbol}</span>`;
  return button;
}

function addRow(arr) {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  arr.forEach((btn) => {
    const button = createButton(btn);
    row.appendChild(button);
  });
  console.log(row);
  return row;
}

const addKeyboard = () => {
  let keyList;
  switch (lang) {
    case 'ru': keyList = keysObj.ru.slice(0); break;
    case 'en': keyList = keysObj.en.slice(0); break;
    case 'ruCaps': keyList = keysObj.ruCaps.slice(0); break;
    case 'enCaps': keyList = keysObj.enCaps.slice(0); break;
    default: keyList = keysObj.en.slice(0);
  }
  const keyboardBlock = document.createElement('div');
  keyboardBlock.classList.add('keyboard-wrapper');
  main.appendChild(keyboardBlock);
  const keyboard = document.querySelector('.keyboard-wrapper');
  keyList.forEach((rowOfkeys) => {
    const row = addRow(rowOfkeys);
    keyboard.appendChild(row);
  });
  // return container;
};

const changeLang = () =>{
  if (lang === 'ru') lang = 'en';
  else lang = 'ru';
  console.log(lang);
  document.querySelector('.keyboard-wrapper').remove();
  addKeyboard();
};

document.addEventListener('keydown', (event) => {
  if ((event.code === 'ControlLeft' && event.altKey) || (event.ctrlKey && event.code === 'AltLeft')) {
    changeLang();
  }
  console.log(event.code);
  let indexPressedKey = keysObj.keyCodes.indexOf(event.code);
  const textArea = document.querySelector('.textarea');
  if(event.key.length < 2) textArea.textContent += event.key;
  console.log(event.key);
});

window.addEventListener('load', () => {
  createHeader();
});
