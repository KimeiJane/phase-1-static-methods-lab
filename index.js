class Formatter {
  // Capitalizes the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Removes all non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '');
  }

  // Capitalizes all words except exceptions (unless it's the first word)
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    return sentence
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) {
          return this.capitalize(word);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}

