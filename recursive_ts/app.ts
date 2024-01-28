// Nの階乗を計算する再帰関数
const factorial_func = (N: number): number => {
    if (N === 0 || N === 1) {
        return 1;
    } else {
        return N * factorial_func(N - 1);
    }
};

const execution_func = (N: number): void => {
    const result = factorial_func(N);
    console.log(`${N}の階乗は${result}です`)
}

execution_func(0);
execution_func(1);
execution_func(3);
execution_func(10);