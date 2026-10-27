let pageIdx = 1;

document.getElementById("inp").focus();

/** Set up major events */
document.addEventListener("keydown", (event) => {
  document.getElementById("keylog").innerHTML = `${event.key}`;

  if (event.key === "*") {
    pageIdx = Math.max(pageIdx - 1, 0);
  } else if (event.key === "#") {
    pageIdx = Math.min(pageIdx + 1, keyPages.length - 1);
  } else if (event.key === "Backspace") {
    document.getElementById("textfield").innerHTML = document
      .getElementById("textfield")
      .innerHTML.toSliced(0, -1);
  } else {
    document.getElementById("textfield").innerHTML +=
      keyPages[pageIdx][`${event.key}`] ?? passThrough[`${event.key}`] ?? "";
  }
});

const console_log = (log) => {
  document.getElementById("logger").innerHTML += `<span>${log}</span>`;
};

class Keyb {
  /**
   * @param test {DOMString}
   * @returns Promise<boolean> */
  async setComposition(text) {
    console_log(text);
    return true;
  }
  /**
   * @param key {DOMString}
   * @returns Promise<boolean> */
  async sendKey(key) {
    console_log(`Send: ${key}`);
    return true;
  }
  /**
   * @param key {DOMString}
   * @returns Promise<boolean> */
  async keydown(key) {
    console_log(`Down: ${key}`);
    return true;
  }
  /**
   * @param key {DOMString}
   * @returns Promise<boolean> */
  async keyup(key) {
    console_log(`Up: ${key}`);
    return true;
  }

  /**
   * Delete a text/node/selection before the cursor
   * @returns Promise<boolean>
   */
  async deleteBackward() {
    return true;
  }

  /**
   * Select the <select> option specified by index.
   * If this method is called on a <select> that support multiple
   * selection, then the option specified by index will be added to
   * the selection.
   * If this method is called for a select that does not support multiple
   * selection the previous element will be unselected.
   *
   * @param index {long}
   * @return void */
  setSelectedOption(index) {}

  /**
   * Select the <select> options specified by indexes. All other options
   * will be deselected.
   * If this method is called for a <select> that does not support multiple
   * selection, then the last index specified in indexes will be selected.
   *
   * @param indexes {sequence<long>} - tf is a sequence<>
   */
  setSelectedOptions(indexes) {}

  /**
   * Remove focus from the current input, usable by Gaia System app, globally,
   * regardless of the current focus state.
   */
  removeFocus() {}
}

navigator.b2g.inputMethod = new Keyb();

document.addEventListener("keyup", (e) => {
  document.getElementById("keylog").innerHTML = " ";

  //const n = navigator.b2g.inputMethod;
  //console_log(n);
});

const passThrough = {
  0: " ",
};

const keyPages = [
  {
    1: "j",
    2: "l",
    3: "m",
    4: "n",
    5: "o",
    6: "p",
    7: "q",
    8: "r",
    9: "s",
  },
  {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
  },
  {
    1: "t",
    2: "u",
    3: "v",
    4: "w",
    5: "x",
    6: "y",
    7: "z",
    8: "",
    9: "",
  },
  {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  },
];
