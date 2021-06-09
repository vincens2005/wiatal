function wiatal(element, config) {
  let i = 0, length;
  
  function fill_defaults(data) {
    let defaults = {
      strings: ['Put your strings here...', 'and Enjoy!'],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 500,
      startDelay: 500,
      loopDelay: 0,
      cursorChar: "|",
      placeholder: false,
      showCursor: true,
      disableBacktyping: false,
      onFinished: () => {},
      loop: true
    };
    
    data = data || {};
    
    for (let i in data) {
      defaults[i] = data[i]; 
    }
    return defaults;
  }
  
  function typewrite() {
    let extra_delay = 0;
    if (i == length) {
      i = 0;
      extra_delay = config.loopDelay;
    }
    setTimeout(() => { type_string(config.strings[i]); }, config.startDelay + extra_delay);
  }
  
  function type_string(str) {
    let index = 0, str_l = str.length;
    let interval = setInterval(() => {
      if (config.placeholder) {
        element.placeholder += str[index];
      }
      else {
        element.textContent += str[index];
      }
      if (++index == str_l) {
        return string_typed(interval);
      }
    }, config.typeSpeed);
  }
  
  function string_typed(interval) {
    clearInterval(interval);
    if ((config.disableBacktyping || !config.loop) && i == length - 1) {
      return config.onFinished();
    }
    setTimeout(() => erase_string(), config.backDelay);
  }
  
  function erase_string() {
    let str = config.placeholder ? element.placeholder : element.textContent
    let str_l = str.length;
    let interval = setInterval(() => {
      if (config.placeholder) {
        element.placeholder = str.substr(0, --str_l);
      }
      else {
        element.textContent += str.substr(0, --str_l);
      }
      if (str_l == 0) {
        return string_erased(interval);
      }
    }, config.backSpeed);
  }
  
  function string_erased(interval) {
    clearInterval(interval);
    ++i;
    typewrite();
  }
  
  function set_cursor(e, p) {
    let cursorSpan = document.createElement('span');
    cursorSpan.classList.add('ityped-cursor');
    cursorSpan.textContent = p.cursorChar;
    e.insertAdjacentElement('afterend', cursorSpan);
  }
  
  function start_typing() {
    config = fill_defaults(config);
    length = config.strings.length;
    if (typeof element == "string") element = document.querySelector(element);
    if (config.showCursor) set_cursor(element, config);
    typewrite();
  }
  
  return start_typing();
}
