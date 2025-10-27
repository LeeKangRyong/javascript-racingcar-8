const isEmpty = (str) => {
    return str.length === 0;
}

const isPositiveIntegerNum = (num) => {
    const trimmedNum = num.trim();
    return /^[1-9][0-9]*$/.test(trimmedNum);
}

const isOver2People = (arr) => {
    return arr.length > 1;
}

export { isEmpty, isPositiveIntegerNum, isOver2People };