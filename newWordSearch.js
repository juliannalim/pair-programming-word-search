const verticalJoinArray = function (letter) {
  const newArr = [];

  letter.forEach(row => {
    newArr.push([]);
  });

  if (letter.length === 1) {
    return letter[0].map(element => [element]);
  }
  for (let row of letter) {
    row.forEach((element, index) => {
      newArr[index].push(element);
    });
  }
  console.log(newArr);
  const newArrJoin = newArr.map(ls => ls.join(''));
  return newArrJoin;
};



const wordSearch = (letters, word) => {
  const finalVertical = verticalJoinArray(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  let reverseWord = word.split('').reverse().join('');
  console.log(reverseWord);

  let trueFalse = true;
  for (let l of horizontalJoin) {

    if (l.includes(word) || l.includes(reverseWord)) {
      return true;

    } else {
      for (let l of finalVertical) {
        if (l.includes(word) || l.includes(reverseWord)) {
          return true;
        }
      }
    }
    if (!l.includes(word)) {
      trueFalse = false;
    }
  }
  return trueFalse;
};

module.exports = wordSearch;