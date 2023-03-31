import './offert.css';

const Offert = () => {
	return (
		<div className='offert'>
			<div className='offert__pack'>
				<h4>Pakiet podstawowy</h4>
				<div className='offert__pack-options'>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrany zestaw ćwiczeń.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrana dieta.</p>
						<img src='../../img/checkno.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Raz w miesiącu konsultacje z trenerem i dietetykiem.</p>
						<img src='../../img/checkno.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Treningi z naszymi trenerami (Wybrane miasta).</p>
						<img src='../../img/checkno.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-price'>49zł</div>
					<button className='greenBtn'>Kup Teraz</button>
				</div>
			</div>
			<div className='offert__pack'>
				<h4>Pakiet Plus</h4>
				<div className='offert__pack-options'>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrany zestaw ćwiczeń.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrana dieta.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-3 Razy w miesiącu konsultacje z trenerem i dietetykiem.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Treningi z naszymi trenerami (Wybrane miasta).</p>
						<img src='../../img/checkno.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-price'>359zł</div>
					<button className='greenBtn'>Kup Teraz</button>
				</div>
			</div>
			<div className='offert__pack'>
				<h4>Pakiet Super Plus</h4>
				<div className='offert__pack-options'>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrany zestaw ćwiczeń.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Indywidualnie dobrana dieta.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Raz w miesiącu konsultacje z trenerem i dietetykiem.</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-option'>
						<p>-Treningi z naszymi trenerami (Wybrane miasta).</p>
						<img src='../../img/check.PNG' alt='zatwierdzenie' />
					</div>
					<div className='offert__pack-price'>899zł</div>
					<button className='greenBtn'>Kup Teraz</button>
				</div>
			</div>
		</div>
	);
};

export default Offert;
