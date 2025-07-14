// Publish the messages collection
Meteor.publish("messages", function () {
    // Check if the user is logged in
    if (this.userId) {
        // Return all messages if logged in
        return Messages.find({});
    } else {
        // If not logged in, publish nothing
        this.ready(); // Prevents errors, signals end of publication
    }
});
