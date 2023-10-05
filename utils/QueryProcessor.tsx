export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "asatpute"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "anushka"
    );
  }
  

  function findLargestNumberInQuery(query: string): string {
    // Use a regular expression to extract numbers from the query
    const numberMatches = query.match(/\d+/g);
  
    // Check if numbers were found in the query
    if (!numberMatches || numberMatches.length === 0) {
      return "No numbers found in the query.";
    }
  
    // Convert the matched strings to numbers
    const numbers = numberMatches.map(Number);
  
    // Find the largest number
    const largestNumber = Math.max(...numbers);
  
    // Convert the largest number to a string
    return largestNumber.toString();
  }
  
  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    return findLargestNumberInQuery(query) ;
  }

  const addMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multiplyMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }


  
 
  
 
  
  
  

  return "";
}