import './optionbutton.css';
import { Link } from 'react-router-dom';

interface PropsType {
	img: string;
	text: string;
	text2?: string;
	path?: string;
	handelOnClick?: () => void;
}

const OptionButton = ({ img, text, text2, path, handelOnClick }: PropsType) => {
	let content;
	if (path) {
		content = (
			<Link to={path} className='optionButton-link'>
				<div className='optionButton'>
					<img src={img} alt={text} />

					<div>
						<p>{text2}</p>
						<h3>{text}</h3>
					</div>
				</div>
			</Link>
		);
	} else {
		content = (
			<div className='optionButton' onClick={handelOnClick}>
				<img src={img} alt={text} />
				<div>
					<p>{text2}</p>
					<h3>{text}</h3>
				</div>
			</div>
		);
	}

	return content;
};

export default OptionButton;
