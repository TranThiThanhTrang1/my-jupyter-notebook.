Meteor.methods({
    'insertMessage': function (message) {
        console.log("If you manage to call the method, you'll see this message in the server console");

        if (!this.userId) {
            // NÉM lỗi đúng cách để client xử lý bằng window.alert
            throw new Meteor.Error('not-authorized', 'You must be logged in to post a message');
        }

        return Messages.insert(message);
    }
});
