const isEmpty = (str) => {
    return str.length === 0;
}

const isIntegerNum = (num) => {
    const trimmedNum = num.trim();
    return /^[0-9]+$/.test(trimmedNum);
}

const isOver2People = (arr) => {
    return arr.length > 1;
}

export { isEmpty, isIntegerNum, isOver2People };