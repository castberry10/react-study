// import { connect } from "react-redux";
import {changeInput, insert, toggle, remove} from '../modules/todos'
import {useSelector, useDispatch} from 'react-redux';
import Todos from '../components/Todos';
import {useCallback} from 'react';
import React from 'react';
import {useActions} from '../lib/useActions';
const TodosContainer = () => {
	const {input, todos} = useSelector(({todos}) => ({
		input: todos.input,
		todos: todos.todos
	}));

	const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
		[changeInput, insert, toggle, remove],
		[]
	);
	// const dispatch = useDispatch();
	// const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
	// const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
	// const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
	// const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

	return(
		<Todos
			input = {input}
			todos = {todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	)
};

// const TodosContainer = ({
//     input, 
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove,
// }) => {
//     return(
//         <Todos 
//             input={input}
//             todos={todos}
//             onChangeInput = {changeInput}
//             onInsert = {insert}
//             onToggle={toggle}
//             onRemove={remove}
//         />
//     )
// }
export default React.memo(TodosContainer);
// export default connect(
//     // 비구조화 할당을 통해 todos를 분리하여
//     // state.todos.input 대신 todos.input을 사용
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove,
//     },
// )(TodosContainer);


// -- - -


// connet를 사용하면 부모 컨테이너가 랜더링 될때 props가 변하지 않는다면 리렌더링이 되지않아 최적화가 되지않지만
// useSelector는 그렇지 않기에 React.memo를 이용하여 최적화 해줘야한다. 