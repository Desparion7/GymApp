import './optionbutton.css';
import { Link } from 'react-router-dom';

interface PropsType {
	img: string;
	text: string;
	path: string;
}

const OptionButton = ({ img, text, path }: PropsType) => {
	return (
		<div className='optionButton'>
			<Link to={path}>
				<img src={img} alt={text} />
			</Link>
			<p>{text}</p>
		</div>
	);
};

export default OptionButton;
