const resultData = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'H', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'L', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'O', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];
  
  const word = "HELLO";
  // let output = [];
  
  
  // -----------------------------------
  
  const transpose = function(result) {
      let originalR = result.length;
      let originalC = result[0].length;
      let output = [];
      
      for (let i = 0; i < originalC; i++) {
        output.push([]);
      }
      for (let j = 0; j < originalC; j++) {
        for (let k = 0; k < originalR; k++) {
          output[j].push(result[k][j]);
        }
      }
      return output;
    // console.log(output)
    };
        
  //   transpose(resultData);
  
  
  const wordSearch = (letters, word) => {
  
  const letters2 = transpose(letters);
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let stringWords of horizontalJoin) {
      if (stringWords.includes(word)) {
        //   console.log('true');
        return true;
  
      }
    }
    const verticalJoin = letters2.map(ls => ls.join(''));
    for (let vertWords of verticalJoin) {
      if (vertWords.includes(word)) {
        //   console.log('true');
        return true;
    
      }
    }
    //
    //   console.log(false)
    return false;
  
  };
  
  // console.log(wordSearch(resultData, word, output));
  
  
  
  
  
  
  
  module.exports = wordSearch;