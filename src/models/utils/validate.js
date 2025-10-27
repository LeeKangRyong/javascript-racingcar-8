const isOver5LettersExists = (arr) => {
    return arr.some((v) => isOver5Letters(v));
}

const isOver5Letters = (str) => {
    return str.length > 5;
}

const isOver2People = (arr) => {
    return arr.length >= 2;
}

const isEmptyNameExists = (arr) => {
    return arr.some((v) => v.length === 0);
}

const isSameNameExists = (arr) => {
    return arr.length !== new Set(arr).size;
}

export { isOver5LettersExists, isOver5Letters, isOver2People, isEmptyNameExists, isSameNameExists };