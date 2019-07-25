export class User {
    public id: number; 

    constructor(
        public name: string, 
        public surname: string, 
        public email: string,
        public password: string,
        public image_url: string = 'https://placekitten.com/100/100',
        public role: string = "user"
    ) { }
}