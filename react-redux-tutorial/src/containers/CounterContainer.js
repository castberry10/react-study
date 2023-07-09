import Counter from "../components/Counter";
import {connect} from "react-redux"
import {increase, decrease} from '../modules/counter';
import { bindActionCreators } from "redux";

const CounterContainer = ({number, increase, decrease}) => {
    return (<Counter number = {number} onIncrease={increase} onDecrease={decrease} />);
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => 
        bindActionCreators(
            {
                increase,
                decrease,   
            },
        dispatch,
    ),
)(CounterContainer);

/* 기호에 따라 아래와 같이 작성해도 됨 */

// const mapStateToProps = state => ({
//     number: state.counter.number,

// });
// const mapDispatchToProps = dispatch => ({
//     // temp function 
//     increase : () => {
//         // console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease');
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);
