import React from 'react'

class BigPic extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        imageIsNull: this.props.src===null?true:false,
    }

    componentDidUpdate() {
        //this.setState({imageIsNull: false});
    }
    componentWillReceiveProps() {
        this.setState({imageIsNull: this.props.src===null?true:false});
    }


    render() {
        if(!this.state.imageIsNull) { 
            return(<img id='selectedImg' className="selectedProduct" src={this.props.src} alt="selected Products" />)
        } else {
            return(<div/>);
        } 
    }
}

export default BigPic