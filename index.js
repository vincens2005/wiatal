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
