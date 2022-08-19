import React from 'react';

class Icon extends React.Component {
    openSite(url){
        window.open(url)
    }

    render(){
        const icons = `icon ${this.props.class}`
        return <div className={icons} onClick={() => this.openSite(this.props.href)}></div>
    }
}

export default Icon;