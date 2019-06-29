import React, { Component } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../layout/Layout";
import Loading from "../../shared/Loading";

export class contact extends Component {
    constructor(porps) {
        super(porps)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.delayTimeout(1000);
    }

    delayTimeout = time => {
        setTimeout(() => {
            this.setState({ loading: false });
        }, time);
    }

    render() {
        return (
            <div>
                <CssBaseline />
                {this.state.loading ?
                    (
                        <Loading />
                    ) : (
                        <Layout>
                            <p>
                                <a href="mailto:my@email.com">Contact us!</a>
                            </p>
                            <style jsx global>{`
                            p {
                                font-family: 'Courier New';
                                text-align: center;
                            }
                            a {
                                text-decoration: none;
                                color: black;
                                font-size: 2rem;
                            }
                            a:hover {
                                opacity: 0.8;
                            }
                            `}</style>
                        </Layout>
                    )
                }
            </div>
        )
    }
}

export default contact
