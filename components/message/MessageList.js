import React, { Component } from 'react'
import MessageItem from "./MessageItem"
import _ from 'lodash';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

export class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };

        let app = this.props.db.database().ref("messages" + this.props.msgId);
        app.on("value", snapshot => {
            this.getData(snapshot.val());
        });
    }

    getData(values) {
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();
        this.setState({
            messages: messages
        });
    }

    render() {
        let messageNodes = this.state.messages.map(message => {
            return (
                <div key={message.key}>
                    <div>
                        <List>
                            <MessageItem msgKey={message.key} 
                                name={message.name} 
                                message={message.message} 
                                updateDate={message.updateDate}
                                updateTime={message.updateTime}
                                db={this.props.db} 
                                msgId={this.props.msgId} />
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                </div>
            );
        });
        return <div>{messageNodes}</div>;
    }
}

export default MessageList
