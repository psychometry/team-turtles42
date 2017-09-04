import React, {Component} from 'react';
class BgSetting extends Component{
  handleChange=(e)=>{

  }
  render(){
    return(
      <div>
        <input type="file" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default BgSetting;
