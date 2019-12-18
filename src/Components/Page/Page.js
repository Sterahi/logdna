import React from "react"

import "./Page.scss"

export default class Page extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "",
            sent: false
        }
    }

    /**
     * Function to post to a theoretical backend.
     *
     */
    sendMessage() {
        // this.set
        if(this.state.message.length !== 0) {
            this.setState({
                message: ""
            })
        }
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value })
        // event.target.value = ""
    }

    render() {
        let string,
            maxLength
        maxLength = 200
        string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        return (
            <div className = "pageSections">
                <div className = "pageTitle">
                    <h1>Default</h1>
                </div>
                <div className = "pageSelection">
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                    <div className = "pageDetails">
                        <div className = "detailHeader">Lorem Ipsum</div>
                        { `${string.substring(0, maxLength)} ...` }
                    </div>
                </div>
                <div className = "pageBody">
                    <h2>Test</h2>
                    <h3 className = "subtitle">Lorem Ipsum</h3>
                    { string }
                    <div className = "box">

                    </div>
                    <div className = "buffer"></div>
                    <div className = "messageWrapper">
                        <input type = "text" placeholder = "Message..."  onChange={ this.handleMessageChange.bind(this) } />
                        <span className = "button" onClick= { this.sendMessage() }>Submit</span>
                    </div>
                </div>
            </div>
        )
    }
}
