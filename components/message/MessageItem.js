import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export class MessageItem extends Component {
    constructor(props) {
        super(props);

        this.onClickDelete = this.onClickDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateFunction = this.updateFunction.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modalState: false,
            messageUpdate: props.message
        };
    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            return { modalState: newState };
        });
    }

    updateFunction(e) {
        e.preventDefault();
        var obj = { message: this.state.messageUpdate };
        let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
        dbCon
            .child(this.props.msgKey)
            .update(obj)
            .then(() => this.toggleModal());
    }

    onChange(e) {
        this.setState({
            messageUpdate: e.target.value
        });
    }

    onClickDelete(e) {
        e.preventDefault();
        let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
        dbCon.child(this.props.msgKey).remove();
    }

    render() {
        return (
            <div>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={this.props.name} src="/static/images/avatar/customer.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.name}
                        secondary={
                            <React.Fragment>
                                {this.props.updateDate} at {this.props.updateTime} —
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    style={{ display: 'inline' }}
                                >
                                    {" " + this.props.message}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        )
    }
}

export default MessageItem
