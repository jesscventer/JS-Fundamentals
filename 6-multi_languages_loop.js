const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let output = '';

for (const line of languages) {
    output += line + '\n';
}
const finalOutput = output.slice(0, -1);
console.log(finalOutput);