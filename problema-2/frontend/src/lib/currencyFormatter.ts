export const currencyFormatter = (amount: number) => {
    return new Intl.NumberFormat("default", {
        style: "currency",
        currency: "CLP",
    }).format(amount);
};
