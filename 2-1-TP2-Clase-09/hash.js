const text = "Hola como va soy matias romera, todo bien? como va? bueno soy matias, chau";

function normalize(word) {
   return word.toLowerCase().replace(/[.!,?]/g, "");
}

function wordRepetitions(text) {
   let dict = {};
   let separatedWords = text.split(" ");
   for (let word of separatedWords) {
      if (normalize(word) in dict) {
         ++dict[normalize(word)];
      } else {
         dict[normalize(word)] = 1;
      }
   }
   console.log(dict);
}

wordRepetitions(text);
