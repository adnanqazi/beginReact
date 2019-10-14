import React, {Component} from 'react';

class HelloWorld extends Component {

  caps = str => str.charAt(0).toUpperCase() + str.slice(1);

  render(){
    let dateTimeNow = new Date().toLocaleString()
    if(this.props.message !== "loco"){
      return <div not_rendered={this.props.id} data-is_rendered={this.props.id} >Hello {this.caps(this.props.message)} at time {dateTimeNow} </div>
    }else {//see how style needs two braces so as to not confuse with jsx
      return <div style={{border: '1px red solid'}}>Screw you {this.caps(this.props.message)}, {this.props.id} times, at time {dateTimeNow} </div>
    }
  }
}

export default HelloWorld
