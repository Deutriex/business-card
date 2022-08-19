import React from 'react';

class Photo extends React.Component {
    render(){
        return (
            <>
                <div className="profilepic"></div>
                <h1>{this.props.name}</h1>
                <p>{this.props.role}</p>  
                <p>{this.props.site}</p>  

            </>  
        )
    }
}

export default Photo;