/**
 * @jsx React.DOM
 */
var socket = io.connect();

var Messages = [];

var Message = React.createClass({
    render: function () {
        return (
            <div class="message">
                <div class="row">
                    <div class="col-xs-1">
                        <img src={this.props.picture} class="img-responsive"/>
                    </div>
                    <div class="col-xs-11">
                        <strong>{this.props.user}</strong>
                        :
				        {this.props.text}
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        )
    }
});

var MessageList = React.createClass({
    render: function () {
        var renderMessage = function (message) {
            return <Message user={message.user} text={message.text} picture={message.picture} />
        }
        return (
            <div class='messages'>
				{ this.props.messages.map(renderMessage)}
            </div>
        );
    }
});

var MessageForm = React.createClass({

    getInitialState: function () {
        return {text: ''};
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var message = {
            user: this.props.user,
            text: this.state.text,
            picture: this.props.picture
        }
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    },

    changeHandler: function (e) {
        this.setState({text: e.target.value});
    },

    render: function () {
        return (
            <div class='message_form'>
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" onChange={this.changeHandler} value={this.state.text} placeholder="Qual sua dúvida, jovem?" />
                </form>
            </div>
        );
    }
});


var ChatApp = React.createClass({

    getInitialState: function () {

        socket.on('init', this.initialize);
        socket.on('server:answer', this.serverResponse);
        socket.on('send:message', this.messageRecieve);
        socket.on('user:join', this.userJoined);
        socket.on('user:left', this.userLeft);
        socket.on('change:name', this.userChangedName);


        return {
            users: [],
            messages: [],
            text: '',
            maxMessages: 5,
            robotPicture: '/img/robot.jpg',
            robotName: 'Mocha',
            picture: '/img/user.png'
        };
    },

    initialize: function (data) {
        this.setState({users: data.users, user: data.name});
    },

    serverResponse: function (message) {
        this.appendMessage(this.state.robotName, message, this.state.robotPicture);

        this.setState();
    },

    messageRecieve: function (message) {
        this.appendMessage(message.user, message.text, this.state.picture);

        this.setState();
    },

    userJoined: function (data) {
        this.state.users.push(data.name);

        var msg = data.name + ' Entrou na sala';

        this.appendMessage(this.state.robotName, msg, this.state.robotPicture);

        this.setState();
    },

    userLeft: function (data) {
        var index = this.state.users.indexOf(data.name);
        this.state.users.splice(index, 1);

        var msg = data.name + ' Saiu';

        this.appendMessage(this.state.robotName, msg, this.state.robotPicture);

        this.setState();
    },

    userChangedName: function (data) {
        var oldName = data.oldName;
        var newName = data.newName;
        this.state.users.splice(this.state.users.indexOf(oldName), 1, newName);

        var msg = 'Change Name : ' + oldName + ' ==> ' + newName;

        this.appendMessage(this.state.robotName, msg, this.state.robotPicture);

        this.setState();
    },

    handleMessageSubmit: function (message) {

        console.log(message);

        this.appendMessage(message.user, message.text, message.picture);

        this.setState();

        socket.emit('send:message', message);
    },


    removeOldMessages: function () {
        if (this.state.messages.length > this.state.maxMessages) {
            this.state.messages.shift();
        }
    },

    appendMessage: function (username, message, picture) {
        this.state.messages.push({
            user: username,
            text: message,
            picture: picture
        });

        this.removeOldMessages();
    },

    render: function () {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <MessageList messages={this.state.messages} />
                    </div>
                </div>
                <nav class="navbar navbar-default navbar-fixed-bottom">
                    <div class="container">
                        <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} picture={this.state.picture} />
                    </div>
                </nav>

            </div>
        );
    }
});

React.renderComponent(<ChatApp/>, document.body);
