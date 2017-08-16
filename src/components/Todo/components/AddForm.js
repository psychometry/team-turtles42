import React, {Component} from 'react';
class AddForm extends Component{
  constructor(props){
    super(props);
    this.state={value:''};
  }
  handleChange=e=>{
    this.setState({value:e.target.value});
  }
  handleSubmit=e=>{
    e.preventDefault();
    if(this.state.value!==''){
      this.props.submit(this.state.value);
    }
    this.setState({value:''});
  }
  render(){
    return(
      <form className={this.props.className} onSubmit={this.handleSubmit}>
          <span className='input'>
            <input
              type='text'
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
            />
          </span>
          <span className='submit'>
            <button type='submit'><i className='inverted add square icon'></i></button>
          </span>
      </form>
    );
  }
};

export default AddForm;
