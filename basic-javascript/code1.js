function validName(){
    var string = document.getElementById('str').value;
    let f = "";
    let m = "";
    let l = "";
    let count1 = 0;
    let count2 = 0;
    let e = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ".") {
        count2 += 1;
      }
      if (string[i] === " ") {
        count1 += 1;
      }
      if (count1 === 0) {
        f += string[i];
      } else
      if (count1 === 1) {
        if (string[i] !== " ") {
          m += string[i];
        }
      } else 
      if (count1 === 2) {
        if (string[i] !== " ") {
          l += string[i];
        }
      }
    }
    if (string[string.length - 1] === ".") {
        count2 -= 1;
      }

    let fRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let a = fRegex.test(f);
    let amain = f.match(fRegex);

    let mRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let b = mRegex.test(m);
    let bmain = m.match(mRegex);

    let lRegex = /^[A-Z][a-zA-Z]+$/g;
    let c = lRegex.test(l);
    let cmain = l.match(lRegex);

      if (a === true && b === true && c === true && count1 === 2
          && (count2 === 0 || count2 === 2)) {
        e = true;
      } else
      if (a === true && b === true && c === true && count1 === 2 
          && (m[m.length - 1] === ".")) {
        e = true;
      } else
      if (a === true && b === true && count1 === 1) {
        e = true; 
      } else
      e = false;
        let fullName = f + " " + m + " " + l
      return e;
  }