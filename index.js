let lang = 'ru';
let enCapsLock = false;
const keysObj = {
  ru: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  ruCaps: [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  ruShift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  en: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  enCaps: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  enShift:[
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']],
  keyMap: [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']],
  keyCodes: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
    'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
};
let enArr = [
  ...keysObj.en[0],
  ...keysObj.en[1],
  ...keysObj.en[2],
  ...keysObj.en[3],
  ...keysObj.en[4]];
let ruArr = [
  ...keysObj.ru[0],
  ...keysObj.ru[1],
  ...keysObj.ru[2],
  ...keysObj.ru[3],
  ...keysObj.ru[4]];
let enCapsArr = [
  ...keysObj.enCaps[0],
  ...keysObj.enCaps[1],
  ...keysObj.enCaps[2],
  ...keysObj.enCaps[3],
  ...keysObj.enCaps[4]];
let ruCapsArr = [
  ...keysObj.ruCaps[0],
  ...keysObj.ruCaps[1],
  ...keysObj.ruCaps[2],
  ...keysObj.ruCaps[3],
  ...keysObj.ruCaps[4]];
let ruShiftArr = [
  ...keysObj.ruShift[0],
  ...keysObj.ruShift[1],
  ...keysObj.ruShift[2],
  ...keysObj.ruShift[3],
  ...keysObj.ruShift[4]];
let enShiftArr = [
  ...keysObj.enShift[0],
  ...keysObj.enShift[1],
  ...keysObj.enShift[2],
  ...keysObj.enShift[3],
  ...keysObj.enShift[4]];

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
  addKeyboard();
};

function createButton(value) {
  const button = document.createElement('div');
  button.classList.add('key');
  button.classList.add(value);
  const keyIndex = keysObj.keyCodes.indexOf(value);
  let keyList;
  switch (lang) {
    case 'ru': keyList = ruArr.slice(0); break;
    case 'en': keyList = enArr.slice(0); break;
    case 'ruCaps': keyList = ruCapsArr.slice(0); break;
    case 'enCaps': keyList = enCapsArr.slice(0); break;
    case 'ruShift': keyList = ruShiftArr.slice(0); break;
    case 'enShift': keyList = enShiftArr.slice(0); break;
    default: keyList = enArr.slice(0);
  }
  let symbol;
  switch (value) {
    case 'ArrowUp': symbol = '▲'; break;
    case 'ArrowDown': symbol = '▼'; break;
    case 'ArrowLeft': symbol = '◄'; break;
    case 'ArrowRight': symbol = '►'; break;
    default: symbol = keyList[keyIndex];
  }
  button.innerHTML = `${symbol}`;
  return button;
}

function addRow(arr) {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  arr.forEach((btn) => {
    const button = createButton(btn);
    row.appendChild(button);
  });
  return row;
}

const addKeyboard = () => {
  const keyboardBlock = document.createElement('div');
  keyboardBlock.classList.add('keyboard-wrapper');
  main.appendChild(keyboardBlock);
  const keyboard = document.querySelector('.keyboard-wrapper');
  keysObj.keyMap.forEach((rowOfkeys) => {
    const row = addRow(rowOfkeys);
    keyboard.appendChild(row);
  });
};

const changeLang = () =>{
  if (lang === 'ru') lang = 'en';
  else lang = 'ru';
  document.querySelector('.keyboard-wrapper').remove();
  addKeyboard();
};

function editTextarea(symbol) {
  const textArea = document.querySelector('.textarea');
  const text = textArea.value;
  const indexStart = textArea.selectionStart;
  const indexEnd = textArea.selectionEnd;
  if (symbol === 'Backspace') {
    if (indexStart > 0) {
      textArea.value = text.slice(0, indexStart - 1) + text.slice(indexEnd);
      textArea.selectionEnd = indexStart - 1;
    }
  } else if (symbol === 'Del') {
    if (indexStart < textArea.value.length) {
      textArea.value = text.slice(0, indexStart)
                     + text.slice(indexEnd + 1);
      textArea.selectionEnd = indexStart;
    }
  } else if (symbol === 'Tab') {
    textArea.value = `${text.slice(0, indexStart)}    ${text.slice(indexStart)}`;
    textArea.selectionEnd = indexStart + 4;
  } else if (indexStart === indexEnd) {
    textArea.value = text.slice(0, indexStart) + symbol + text.slice(indexStart);
    textArea.selectionEnd = indexStart + 1;
  } else {
    textArea.value = text.slice(0, indexStart) + symbol + text.slice(indexEnd);
    textArea.selectionEnd = indexStart + 1;
  }
}

const updateTextArea = (indexPressedKey) => {
  let textSymbol = enArr[indexPressedKey];

  if (textSymbol.length === 1) {
    switch (lang) {
      case 'ru': textSymbol = ruArr[indexPressedKey]; break;
      case 'en': textSymbol = enArr[indexPressedKey]; break;
      case 'ruCaps': textSymbol = ruCapsArr[indexPressedKey]; break;
      case 'enCaps': textSymbol = enCapsArr[indexPressedKey]; break;
      case 'ruShift': textSymbol = ruShiftArr[indexPressedKey]; break;
      case 'enShift': textSymbol = enShiftArr[indexPressedKey]; break;
      default: textSymbol = enArr[indexPressedKey];
    }
    console.log(textSymbol,222);
    editTextarea(textSymbol);
  } else if (textSymbol === 'Space') {
    textSymbol = ' ';
    editTextarea(textSymbol);
  } else if (textSymbol === 'Tab') {
    editTextarea(textSymbol);
  } else if (textSymbol === 'Enter') {
    textSymbol = '\n';
    editTextarea(textSymbol);
  } else if (textSymbol === 'Backspace' || textSymbol === 'Del') {
    editTextarea(textSymbol);
  } else if (textSymbol === 'CapsLock') {
    if (enCapsLock) {
      enCapsLock = false;
      lang = lang.slice(0, 2);
    } else {
      enCapsLock = true;
      lang += 'Caps';
    }
    document.querySelector('.keyboard-wrapper').remove();
    addKeyboard();
    const buttonCaps = document.querySelector('.CapsLock');
    if (enCapsLock) buttonCaps.classList.add('caps-on');
    else buttonCaps.classList.remove('caps-on');
  } else if (textSymbol === 'Shift') {
    lang += 'Shift';
    document.querySelector('.keyboard-wrapper').remove();
    addKeyboard();
    const buttonShift = document.querySelector('.ShiftLeft');
    buttonShift.classList.add('caps-on');
  }
};

document.addEventListener('keydown', (event) => {
  if ((event.code === 'ControlLeft' && event.altKey) || (event.ctrlKey && event.code === 'AltLeft')) {
    changeLang();
  }
  const indexPressedKey = keysObj.keyCodes.indexOf(event.code);
  console.log([indexPressedKey],event.code);
  document.querySelector(`.${event.code}`).classList.add('press');
  updateTextArea(indexPressedKey);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('press');
  if (event.code === 'ShiftLeft') {
    lang = lang.slice(0, 2);
    document.querySelector('.keyboard-wrapper').remove();
    addKeyboard();
    const buttonShift = document.querySelector('.ShiftLeft');
    buttonShift.classList.remove('caps-on');
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    const indexPressedKey = keysObj.keyCodes.indexOf(event.target.classList[1]);
    updateTextArea(indexPressedKey);
  }
});

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  } else lang = 'en';
}
window.addEventListener('load', () => {
  //alert('Я не успел до конца доделать, буду признателен, если дадите еще немного время');
  getLocalStorage();
  createHeader();
});
window.addEventListener('beforeunload', setLocalStorage);
