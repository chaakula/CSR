export class UserLoanInformation {
    public downPayment: number;
    public minPaymentRange: number;
    public maxPaymentRange:number;
    public state: string;
    public zipCode: string;
    public vehicleYear: number;
    public vehicleMilage: number;
    public vehicleBookValue: number;
    public tradeIn: string;
    public tradeInAmountOwned: number;
    public tradeInAmountToCredit:number;
    public loanTermLength: number;

    constructor() {
        this.tradeIn = 'N';
    }
}