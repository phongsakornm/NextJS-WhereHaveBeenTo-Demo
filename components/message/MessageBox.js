import React, { Component } from 'react'
import _ from "lodash";
import Trim from "trim";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import IconSend from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

export class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.state = {
            name: "",
            email: "",
            message: "",
            showAlert: false,
            validated: true
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeComment(e) {
        this.setState({
            message: e.target.value
        });
    }

    formValidated = () => {
        if (this.state.name == "") {
            this.setState({
                validated: false
            });
            return false
        }
        if (this.state.email == "") {
            this.setState({
                validated: false
            });
            return false
        }
        if (this.state.message == "") {
            this.setState({
                validated: false
            });
            return false
        }
        this.setState({
            validated: true
        });
        return true
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.formValidated()) {
            let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
            var timestamp = this.getTimestamp(); //20190617150828
            var updateDateTimestamp = timestamp.substring(8, 6) + "/" + timestamp.substring(6, 4) + "/" + timestamp.substring(4, 0);
            var updateTimeTimestamp = timestamp.substring(10, 8) + ":" + timestamp.substring(12, 10);
            dbCon.child(timestamp).set({
                name: Trim(this.state.name),
                email: Trim(this.state.email),
                message: Trim(this.state.message),
                updateDate: updateDateTimestamp,
                updateTime: updateTimeTimestamp
            });
            this.setState({
                showAlert: true,
                name: "",
                email: "",
                message: ""
            });
        }
    }

    getTimestamp = () => {
        try {
            var date = _.padStart(new Date().getDate(), 2, "0");
            var month = _.padStart(new Date().getMonth() + 1, 2, "0");
            var year = _.padStart(new Date().getFullYear(), 4, "0");
            var hours = _.padStart(new Date().getHours(), 2, "0");
            var min = _.padStart(new Date().getMinutes(), 2, "0");
            var sec = _.padStart(new Date().getSeconds(), 2, "0");
            return year + "" + month + "" + date + "" + hours + "" + min + "" + sec;
        } catch (e) {
            return e.message;
        }
    };

    render() {
        return (
            <div>
                <Typography variant="h5" gutterBottom style={{paddingTop:50}}>
                    <img src={"/static/logo/chat-msg.png"} style={{ verticalAlign: "middle", paddingRight: 10 }} />
                    แสดงความคิดเห็นของคุณได้ที่นี่
                </Typography>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <FormGroup style={{ flexDirection: "unset" }} autoComplete="off">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={this.onChangeName}
                                value={this.state.name}
                                className="sg-textNameInbox"
                                id="outlined-name"
                                label="ซื่อ*"
                                type="text"
                                name="name"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={this.onChangeEmail}
                                value={this.state.email}
                                className="sg-textEmailInbox"
                                id="outlined-email-input"
                                label="อีเมล์*"
                                type="email"
                                name="email"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={this.onChangeComment}
                                value={this.state.message}
                                id="outlined-multiline-static"
                                label="แสดงความคิดเห็น*"
                                placeholder="แสดงความคิดเห็นของคุณได้ที่นี่"
                                multiline
                                name="comment"
                                rows="4"
                                margin="normal"
                                variant="outlined"
                                style={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" style={{ width: 120 }} >
                                ส่งข้อมูล
                            <IconSend style={{ marginLeft: 8 }} />
                            </Button>
                        </Grid>
                        {!this.state.validated ? <a style={{ marginTop: 5, color: 'red' }}>** กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะครับ **</a> : null}
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default MessageBox
