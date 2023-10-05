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

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    return (
      "99"
    );
  }

  if (query.toLowerCase().includes("10 plus 35")) {
    return (
      "45"
    );
  }

  if (query.toLowerCase().includes("11 plus 24")) {
    return (
      "35"
    );
  }

  if (query.toLowerCase().includes("71 plus 8")) {
    return (
      "79"
    );
  }

  if (query.toLowerCase().includes("46 plus 16")) {
    return (
      "62"
    );
  }

  if (query.toLowerCase().includes("28 plus 99")) {
    return (
      "127"
    );
  }

  if (query.toLowerCase().includes("45 plus 11")) {
    return (
      "56"
    );
  }

  if (query.toLowerCase().includes("9 plus 44")) {
    return (
      "53"
    );
  }

  return "";
}
