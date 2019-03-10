import React, { Component } from 'react';

class EventComponent extends Component {
    constructor() {
        super()
        this.state = {
            imgIndex : 0,
            tab : [
                "https://www.pacificlearningacademy.com/wp-content/uploads/2017/07/to-do-image-298x351-2.jpg",
                "https://foreverfit.today/wp-content/uploads/2017/08/gYTmL1Pj_400x400.png",
                "http://actusperformance.com/wp-content/uploads/2015/06/ID-100288828_DONE-300x300.jpg"]
        
        };
    }

    // handleClick = () => {
    //     console.log("i was clicked
    //     if (this.state.imgIndex === 0) { 
    //         this.setState({imgIndex: 1})
    //     } 
    //     else if(this.state.imgIndex ===1) {
    //         this.setState({imgIndex: 2})
    //     } 
    //     else { 
    //         this.setState({imgIndex: 0})
    //     }   
    // }
    

    handleClick = () => {
        console.log('ancien index', this.state.imgIndex)

        this.setState({
            imgIndex: (this.state.imgIndex+1)%this.state.tab.length
        }, () => { console.log('nouvel index', this.state.imgIndex) })



    }

    render() {
        return (
            <div>
                <hr />
                <hr />
                <img onMouseOver={() => console.log("i'm on it")} 
                src={this.state.tab[this.state.imgIndex]} alt="todo"/>
                <hr />
                <hr />
                <button onClick={(e)=> this.handleClick()}>Click Me</button>
            </div>
        );
    }
};

export default EventComponent