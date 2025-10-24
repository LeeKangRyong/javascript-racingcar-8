const isEmpty = (str) => {
    return str.length === 0;
}

const isIntegerNum = (num) => {
    const trimmedNum = num.trim();
    return /^[0-9]+$/.test(trimmedNum);
}

export { isEmpty, isIntegerNum };