export class Property {
    constructor(
        public id: number,
        public title: string,
        public location: string,
        public pricePerNight: number,
        public numberOfPeople: number,
        public description: string,
        public imgUrl: string,
        public hostId: number
    ) { }
}