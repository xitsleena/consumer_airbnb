export class Booking {
    public id: number;
    constructor(
        public userId: number,
        public listingId: number,
        public status: string,
        public dateStart: string, 
        public dateEnd: string
    ) { }
}
