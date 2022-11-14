export class BlockSummary {
    constructor(height: any, numberTransactions: any, creationDateTime: any, coinType: any)
    {
        this.height = height;
        this.numberTransactions = numberTransactions; 
        this.creationDateTime = creationDateTime;
        this.coinType = coinType;
    }

    height: Number;
    numberTransactions: Number;
    creationDateTime: Date;
    coinType: String;
}
