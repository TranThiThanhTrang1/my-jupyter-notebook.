if (Meteor.isClient) {
    // Cấu hình tài khoản chỉ dùng username
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_ONLY',
    });

    Template.messageForm.events({
        'click .js-save-message': function (event) {
            var messageText = $('#message-text-input').val();
            var messageNickname = "Anon";
            if (Meteor.user()) {
                messageNickname = Meteor.user().username;
            }

            var message = {
                messageText: messageText,
                nickname: messageNickname,
                createdOn: new Date()
            };

            // ✅ Gọi server method thay vì insert trực tiếp
            Meteor.call('insertMessage', message, function (err, res) {
                if (err) {
                    if (err.error === 'not-authorized') {
                        window.alert('You need to log in!');
                    } else {
                        window.alert('Error: ' + err.reason);
                    }
                } else {
                    $('#message-text-input').val('');
                }
            });
        }
    });


    Template.header.helpers({
        nickname: function () {
            return Meteor.user() ? Meteor.user().username : '';
        }
    });

    Template.messageList.helpers({
        messages: function () {
            return Messages.find({}, { sort: { createdOn: -1 } });
        }
    });
}
