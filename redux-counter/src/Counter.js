import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from './actions/counterAction';

function Counter(props) {
  return (
  <div>
      {props.count}
      <button onClick={props.decrease}>Decrease 1</button>
      <button onClick={props.decrease}>Decrease 5</button>
      <button onClick={props.decrease}>Decrease 10</button>
      <button onClick={props.increase}>Increase 1</button>
      <button onClick={props.increase}>Increase 5</button>
      <button onClick={props.increase}>Increase 10</button>

      </div>
      )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
increase: increaseCount,
decrease: decreaseCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);