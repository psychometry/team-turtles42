import React, {Component} from 'react';
import './Item.scss';
class Item extends Component{
  render(){
    const {item, className, toggleItem, deleteItem}=this.props;
    
    return (
      <div className={className}>
        <span>
          <input 
            className="checkbox" 
            type='Checkbox' checked={item.done} 
            onChange={() => toggleItem(item.id)}
          />
        </span>
        <span className={item.done?'checked':''}>
          {item.text}
        </span>
        <span className='delete'>
          <button onClick={()=>deleteItem(item.id)}><i className='inverted remove icon'></i></button>
        </span>
      </div>
      )
    }
}
export default Item;
