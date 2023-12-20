import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';

const TagsBlock = styled.div`
	margin-top: 0.5rem;
	.tag{
		dispaly: inline-block;
		color: ${palette.gray[7]};
		text-decoration : none;
		margin-right: 0.5rem;
		&:hover{
			color: ${palette.cyan[6]};
		}
	}
`;

const Tags = ({tags}) => {
	return(
	<TagsBlock>
		{tags.map(tag => (
			<Link className='tag' to={`/?tags=${tag}`} key={tag}>
				#{tag}
			</Link>
		))}
	</TagsBlock>
	);
};
export default Tags;