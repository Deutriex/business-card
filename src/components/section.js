import React from 'react';

class Section extends React.Component {
    render(){
        return (
            <div className="section">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Section;