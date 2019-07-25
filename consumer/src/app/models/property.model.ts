export class Property {
    public id: number;
    constructor(
        public title: string,
        public location: string,
        public pricePerNight: number,
        public numberOfPeople: number,
        public description: string,
        public imgUrl: string,
        public hostId: number
    ) { }
}