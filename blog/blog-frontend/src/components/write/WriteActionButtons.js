import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
	margin-top: 1rem;
	margin-bottom: 3rem;
	button + button{
	margin-left: 0.5rem;
	}
`;

/* TagBox에서 사용하는버튼과 일치하는 높이로 설정한 후 서로간의 여백지정*/
const StyleButton = styled(Button)`
	height: 2.125rem;
	& + &{
		margin-left: 0.5rem;
	}
`;

const WriteActionButtons = ({onCancel, onPulish}) => {
	return(
		<WriteActionButtonsBlock>
			<StyleButton cyan onClick={onPulish}>
				포스트 등록
			</StyleButton>
			<StyleButton onClick={onCancel}>취소</StyleButton>
		</WriteActionButtonsBlock>
	);
};

export default WriteActionButtons;