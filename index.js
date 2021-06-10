function wiatal(element, config) {
  let i = 0, length;
  
  // so that terser shrinks the names (more compression)
  let set_timeout = setTimeout, set_interval = setInterval, clear_interval = clearInterval, error = console.error;
  
  let fill_defaults = (data) => {
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
  };
  
  let typewrite = () => {
    let extra_delay = 0;
    if (i == length) {
      i = 0;
      extra_delay = config.loopDelay;
    }
    set_timeout(() => { type_string(config.strings[i]); }, config.startDelay + extra_delay);
  };
  
  let type_string = (str) => {
    let index = 0, str_l = str.length;
    let interval = set_interval(() => {
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
  };
  
  let string_typed = (interval) => {
    clear_interval(interval);
    if ((config.disableBacktyping || !config.loop) && i == length - 1) {
      return config.onFinished();
    }
    set_timeout(() => erase_string(), config.backDelay);
  };
  
  let erase_string = () => {
    let str = config.placeholder ? element.placeholder : element.textContent;
    let str_l = str.length;
    let interval = set_interval(() => {
      if (config.placeholder) {
        element.placeholder = str.substr(0, --str_l);
      }
      else {
        element.textContent = str.substr(0, --str_l);
      }
      if (str_l == 0) {
        return string_erased(interval);
      }
    }, config.backSpeed);
  };
  
  let string_erased = (interval) => {
    clear_interval(interval);
    ++i;
    typewrite();
  };
  
  let set_cursor = () => {
    let e = element;
    let cursorSpan = document.createElement('span');
    cursorSpan.classList.add('ityped-cursor');
    cursorSpan.textContent = config.cursorChar;
    e.insertAdjacentElement('afterend', cursorSpan);
  };
  
  let start_typing = () => {
    if (!element) {
      error("wiatal: no element defined");
      return;
    }
    config = fill_defaults(config);
    length = config.strings.length;
    if (typeof element == "string") element = document.querySelector(element);
    if (!element) {
      error("wiatal: element does not exist");
      return;
    }
    if (config.showCursor && !config.placeholder) set_cursor();
    typewrite();
  };
  
  return start_typing();
}
