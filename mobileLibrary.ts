import { Mobile } from "./mobile"

export class MobileLibrary
{
    private name: string
    private location: string
    private mobiles: Mobile[]
    private totalPrice: number

    
    
    constructor (name:string, location:string, mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();   
    };

    public getName(): string
    {
        return this.name;
    };
    public setName(name: string): void
    {
        this.name = name;
    };
    
    public getLocation(): string
    {
        return this.location;
    };
    public setLocation(location: string): void
    {
        this.location = location;
    };
    
    public getMobiles(): Mobile[]
    {
        return this.mobiles;
    };
    public setMobiles(mobiles: Mobile): void
    {
        this.mobiles.push(mobiles);
    };
    
    public getTotalPrice(): number
    {
        return this.totalPrice;
    };   
    public setTotalPrice(totalPrice: number): void
    {
        this.totalPrice = totalPrice;
    };

    private totalPriceCalculation(): number
    {
        let totalPrice: number = 0;
        for (let mobile in this.mobiles)
        {
            totalPrice += this.mobiles[mobile].getPrice();
        };
        return totalPrice;
    };

    public printLibrary(): void
    {
        console.log('Those are all my (' + this.mobiles.length + ') mobiles:');
        for(let mobile in this.mobiles)
        {
            this.mobiles[mobile].printFeatures();
        };
        console.log('\nPrice overall: ' + this.totalPrice);
    };
};