import React from 'react';
import { connect } from 'react-redux';
import { addOne } from '../Actions/actions';
import { getNum } from '../Selectors/selectors';

class Number extends React.Component {
  render() {
    return (
      <div>
        <div>Current Number is {this.props.num}</div>
        <button onClick={this.props.addOne}>
          Add Num
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    num: getNum(state)
});

export default connect(mapStateToProps,{ 
    addOne 
})(Number);
