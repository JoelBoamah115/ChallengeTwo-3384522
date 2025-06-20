
class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort(); // Sort products lexicographically
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];
      // Filter products that start with current prefix
      let matches = this.products.filter(product => product.startsWith(prefix));
      // Take first 3 matches
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}

// 
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const suggestionSystem = new SearchSuggestionSystem(products);
console.log(suggestionSystem.getSuggestions(searchWord));

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
