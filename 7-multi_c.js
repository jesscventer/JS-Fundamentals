const firstArgument = process.argv[2];
const numOccurrences = parseInt(firstArgument);
if (isNaN(numOccurrences)) {
    console.log("Missing number of occurrences");
} else {
    let outputString = ''
    let i = 0;
    while (i < numOccurrences) {
        outputString += "C is fun\n";
         i++;
  }
  const finalOutput = outputString.slice(0, -1);
  console.log(finalOutput);
}