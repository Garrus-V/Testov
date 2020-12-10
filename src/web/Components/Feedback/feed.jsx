import React from 'react';
import './feed.module.css'



class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''

        }
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Почта</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
            </div>
        );
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handleSubmit(event) {
    }
}

export default Feed;