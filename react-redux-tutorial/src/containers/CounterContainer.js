import Counter from "../components/Counter";
import {connect} from "react-redux"
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (<Counter number = {number} onIncrease={increase} onDecrease={decrease} />);
};


const mapStateToProps = state => ({
    number: state.counter.number,

});

const mapDispatchToProps = dispatch => ({
    // temp function 
    increase : () => {
        // console.log('increase');
        dispatch(increase());
    },
    decrease: () => {
        // console.log('decrease');
        dispatch(decrease());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);


/* 기호에 따라 아래와 같이 작성해도 됨 */

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispath => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     }),
// )(CounterContainer);
