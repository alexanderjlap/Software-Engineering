type TaxStrategy = (income: number) => number;

export const singleTax: TaxStrategy = (income: number): number => {
    if(income >= 0 && income <= 19999){
        return income * 0.12;
    }else if(income >= 20000 && income <= 49999){
        return income * 0.15;
    }else if(income >= 50000){
        return income * 0.20;
    }
    return 0;
};

export const marriedTax: TaxStrategy = (income: number): number => {
    if(income >= 0 && income <= 49999){
        return income * 0.12;
    }else if(income >= 50000 && income <= 99999){
        return income * 0.15;
    }else if(income >= 100000){
        return income * 0.20;
    }
    return 0;
};

export const separatedTax: TaxStrategy = (income: number): number => {
    if(income >= 0 && income <= 15999){
        return income * 0.12;
    }else if(income >= 16000 && income <= 40000){
        return income * 0.15;
    }else if(income >= 40001 && income <= 74999){
        return income * 0.20;
    }else if(income >= 75000){
        return income * 0.25;
    }
    return 0;
};

export const selectTaxStrategy = (strategy: TaxStrategy, income: number): number => {
    return strategy(income);
};