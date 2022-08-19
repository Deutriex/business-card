import React from 'react';

class Button extends React.Component {
    render(){
        const classes = `button ${this.props.class}`
        return <a href={this.props.href} target="_blank" className={classes}>{this.props.text}</a>
    }
}

export default Button;