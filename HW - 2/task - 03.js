const findLongestWord = function (string) {
    string = string.split(" ");
    let longest = 0;
    let longestPosition;
  
    for (let i = 0; i < string.length; i += 1) {
      if (string[i].length >= longest) {
        longest = string[i].length;
        longestPosition = i;
      }
    }
    return string[longestPosition];
  };
  
  //  /*
  //   * Вызовы функции для проверки работоспособности твоей реализации.
  //   */
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
  
  console.log(findLongestWord("Google do a roll")); // 'Google'
  
  console.log(findLongestWord("May the force be with you")); // 'force'