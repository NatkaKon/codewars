function capitalizeWord(word) {
    if ((word.length >= 1) && (word.length <= 10)) {
    word = word[0].toUpperCase() + word.substr(1);  
    }
      return word;
  }