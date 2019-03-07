import React, { Component } from 'react';


class EventComponent extends Component {
    constructor() {
        super()
        this.state = {
            img : "https://www.pacificlearningacademy.com/wp-content/uploads/2017/07/to-do-image-298x351-2.jpg",
        };
    }

    handleClick = () => {
        console.log("i was clicked")
        // if(this.state.img) { 
        //      return this.state.img2}
        //     else if(this.state.img2) {
        //         return this.state.img3}
            }

    render() {
    
    const img1 = "https://www.pacificlearningacademy.com/wp-content/uploads/2017/07/to-do-image-298x351-2.jpg"
    const img2 = "https://foreverfit.today/wp-content/uploads/2017/08/gYTmL1Pj_400x400.png"
    const img3 = "http://actusperformance.com/wp-content/uploads/2015/06/ID-100288828_DONE-300x300.jpg"
    return (
        <div>
            <hr />
            <hr />
            <img onMouseOver={() => console.log("i'm on it")} 
            src={this.state.img} alt="todo"/>
            <hr />
            <hr />
            <button onClick={(e)=> this.handleClick()}>Click Me</button>
        </div>
    );
    }
};


export default EventComponent