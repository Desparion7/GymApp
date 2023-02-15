import './optionbutton.css';
import { Link } from 'react-router-dom';

interface PropsType {
	img: string;
	text: string;
}

const OptionButton = ({ img, text }: PropsType) => {
	return (
		<div className='optionButton'>
			<Link to='/'>
				<img src={img} alt={text} />
			</Link>
			<p>{text}</p>
		</div>
	);
};

export default OptionButton;
