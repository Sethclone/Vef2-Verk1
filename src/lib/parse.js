export function parseQuestions() {
  return 'test';
}

/**
* @param {string} line
* @returns 
*/
export function parseLine(str){
    const split = str.split(',')
    //TODO: MAppa categoryNumber í streng skv skjölun


    if (split.length !== 6){
      return null
    }
    const categoryNumber = split[0];
    const subCategory = split[1];
    const difficulty = split[2];
    const quality = split[3];
    const question = split[4];
    const answer = split[5];

    if( categoryNumber === ''){
      return null;
    }

    const q = {
      categoryNumber,
      subCategory,
      difficulty,
      quality,
      question,
      answer
    };

    return q
}
