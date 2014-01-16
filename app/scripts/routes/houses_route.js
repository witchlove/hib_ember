HibEmber.HousesRoute = Ember.Route.extend({
    model: function(){
       return this.store.find('house')
    }
});


