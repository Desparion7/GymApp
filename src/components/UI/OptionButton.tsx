import './optionbutton.css';
import { Link } from 'react-router-dom';

interface PropsType {
	img: string;
	text: string;
	path?: string;
	handelOnClick?: () => void;
}

const OptionButton = ({ img, text, path, handelOnClick }: PropsType) => {

	let content;
	if (path) {
		content = (
			<div className='optionButton'>
				<Link to={path}>
					<img src={img} alt={text} />
				</Link>
				<p>{text}</p>
			</div>
		);
	} else {
		content = (
			<div className='optionButton' onClick={handelOnClick}>
				<img src={img} alt={text} />
				<p>{text}</p>
			</div>
		);
	}

	return content;
};

export default OptionButton;
