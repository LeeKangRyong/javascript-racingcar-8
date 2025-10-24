const isOver5LettersExists = (arr) => {
    return arr.some((v) => isOver5Letters(v));
}

const isOver5Letters = (str) => {
    return str.length > 5;
}

const isOver2People = (arr) => {
    return arr.length >= 2;
}

export { isOver5LettersExists, isOver5Letters, isOver2People };