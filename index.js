const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newReturn = tutorials.map(caseElement);
  return newReturn;
}

const caseElement = element => {
  let splitWords = element.split(" ");
  let casedSentance = "";
  for(element of splitWords){
    element = element.charAt(0).toUpperCase() + element.substr(1);
    casedSentance += element + " "
  }
  let removeEndSpace = casedSentance.slice(0, -1);
  return removeEndSpace;
}
