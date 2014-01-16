HibEmber.Router.map(function () {
    this.route("tekoop", { path: "/tekoop" });
    this.route("contact", { path: "/contact" });
    this.resource('houses');
    this.resource('house', { path: '/houses/:house_id' });
});
