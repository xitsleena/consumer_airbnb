var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, image_url) {
        if (image_url === void 0) { image_url = 'https://placekitten.com/100/100'; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.image_url = image_url;
    }
    return User;
}());
export { User };
//# sourceMappingURL=user.model.js.map