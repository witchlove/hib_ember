HibEmber.HouseRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('house', params.house_id)
    }
});