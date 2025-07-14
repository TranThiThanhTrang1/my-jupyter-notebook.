Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {

    Template.nicknameForm.events({
        'click .js-set-nickname': function () {
            var nickname = $('#nickname-input').val();
            Session.set('nickname', nickname); // ✅ Lưu nickname vào Session
        }
    });

    Template.messageForm.events({
        'click .js-save-message': function (event) {
            var messageText = $('#message-text-input').val();
            var messageNickname = Session.get('nickname');
            var message = {
                messageText: messageText,
                nickname: messageNickname,
                createdOn: new Date()
            };
            Messages.insert(message);
        }
    });

    Template.header.helpers({
        nickname: function () {
            return Session.get('nickname'); // ✅ Trả về nickname
        },
    });

    Template.messageList.helpers({
        messages: function () {
            return Messages.find({});
        }
    });

}
