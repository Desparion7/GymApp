import './trainingStoryScreen.css';

const TrainingStoryScreen = () => {
	return (
		<section className='trainingStory'>
			<h2>Historia moich treningów</h2>
			<div className='trainingStory__table'>
				<div className='trainingStory__thead'>
					<div>Data treningu</div>
					<div>Nazwa zestawu ćwiczeń</div>
					<div className='trainingStory__thead-time'>Czas treningu</div>
					<div className='trainingStory__thead-options'>Edytuj</div>
				</div>
				<div className='trainingStory__tbody'>
					<div>24-11-1991</div>
					<div>Przykładowy zestaw ze strony</div>
					<div className='trainingStory__tbody-time'>125 min</div>
					<div className='trainingStory__tbody-remove'>
						<div>X</div>
						<div>/</div>
					</div>
				</div>
				<div className='trainingStory__tbody'>
					<div>24-11-1991</div>
					<div>Przykładowy zestaw ze strony</div>
					<div className='trainingStory__tbody-time'>125 min</div>
					<div className='trainingStory__tbody-remove'>
						<div>X</div>
						<div>/</div>
					</div>
				</div>
				<div className='trainingStory__tbody'>
					<div>24-02-1991</div>
					<div>Przykładowy zestaw ze strony po moich zmianach</div>
					<div className='trainingStory__tbody-time'>125 min</div>
					<div className='trainingStory__tbody-remove'>
						<div>X</div>
						<div>/</div>
					</div>
				</div>
				<div className='trainingStory__tbody'>
					<div>24-02-1991</div>
					<div>Przykładowy zestaw ze strony po moich zmianach</div>
					<div className='trainingStory__tbody-time'>125 min</div>
					<div className='trainingStory__tbody-remove'>
						<div>X</div>
						<div>/</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrainingStoryScreen;
