const factorial = input => {
    let fac = 1;
    for (let i = 0; i < input; i++) fac *= (i + 1);
    return fac;
};

const permutation = (n, r) => factorial(n) / factorial(n - r);
const combination = (n, r) => permutation(n, r) / factorial(r);
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
    combination,
    permutation,
    multiCombination,
    multiPermutation,
};
