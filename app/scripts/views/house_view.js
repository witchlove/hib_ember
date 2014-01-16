HibEmber.houseView = Ember.View.extend({
    templateName: 'house_view',
    name: "test",
    didInsertElement: function() {
        Ember.run.next(function() {
            Holder.run();
        })
    }
});


