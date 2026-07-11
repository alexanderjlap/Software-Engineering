export interface TaxStatusOO {
    calculateTax(income: number): number;
}

export class Single implements TaxStatusOO {
    public calculateTax(income: number): number {
        if(income >= 0 && income <= 19999){
            return income * 0.12;
        }else if(income >= 20000 && income <= 49999){
            return income * 0.15;
        }else if(income >= 50000){
            return income * 0.20;
        }
        return 0;
    }
}

export class Married implements TaxStatusOO {
    public calculateTax(income: number): number {
        if(income >= 0 && income <= 49999){
            return income * 0.12;
        }else if(income >= 50000 && income <= 99999){
            return income * 0.15;
        }else if(income >= 100000){
            return income * 0.20;
        }
        return 0;
    }
}

export class Separated implements TaxStatusOO {
    public calculateTax(income: number): number {
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
    }
}

export class Context {
    private _taxStatus: TaxStatusOO;

    constructor(taxStatus: TaxStatusOO){
        this._taxStatus = taxStatus;
    }

    get taxStatus(): TaxStatusOO {
        return this._taxStatus;
    }

    set taxStatus(value: TaxStatusOO){
        this._taxStatus = value;
    }

    calculateTax(income: number): number {
        return this._taxStatus.calculateTax(income);
    }
}