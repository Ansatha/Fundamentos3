export class Mobile
{
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor (name:string, model:string, trademark:string, sdSize:number,
        color:string, is5G:boolean, cameraNumber:number, price:number)
    {
    this.name = name;
    this.model = model;
    this.trademark = trademark;
    this.sdSize = sdSize;
    this.color = color;
    this.is5G = is5G;
    this.cameraNumber = cameraNumber;
    this.price = price;
    };

    public setName(newName:string):void
    {
        this.name = newName;
    };
    public getName():string
    {
        let result:string = this.name;
        return result;
    };

    public setModel(newModel:string):void
    {
        this.model = newModel;
    };
    public getModel():string
    {
        let result:string = this.model;
        return result;
    };

    public setTrademark(newTrademark:string):void
    {
        this.trademark = newTrademark;
    };
    public getTrademark():string
    {
        let result:string = this.trademark;
        return result;
    };

    public setSdSize(newSdSize:number):void
    {
        this.sdSize = newSdSize;
    };
    public getSdSize():number
    {
        let result:number = this.sdSize;
        return result;
    };

    public setColor(newColor:string):void
    {
        this.color = newColor;
    };
    public getColor():string
    {
        let result:string = this.color;
        return result;
    };

    public setIs5G(newIs5G:boolean):void
    {
        this.is5G = newIs5G;
    };
    public getIs5G():boolean
    {
        let result:boolean = this.is5G;
        return result;
    };

    public setCameraNumber(newCameraNumber:number):void
    {
        this.cameraNumber = newCameraNumber;
    };
    public getCameraNumber():number
    {
        let result:number = this.cameraNumber;
        return result;
    };

    public setPrice(newPrice:number):void
    {
        this.price = newPrice;
    };
    public getPrice():number
    {
        let result:number = this.price;
        return result;
    };

    public printFeatures():void
    {
        console.log('\nThe features of the mobile', this.name, 'are:\n\tName:',
                    this.name, '\n\tModel:', this.model, '\n\tTrademark:',
                    this.trademark, '\n\tSD Size(GB):', this.sdSize, '\n',
                    '\tColor:', this.color, '\n\tIs 5G?:', this.is5G, '\n',
                    '\tNumber of Cameras:', this.cameraNumber);
    };
};