import React from 'react';
import Slider from './modules/Slider';
import Block from './components/Block';

class App extends React.Component {
	render = () => {
		return <>
			<Slider>
				<Block style={{ backgroundColor: 'red' }}>
					First slide
				</Block>
				<Block style={{ backgroundColor: 'blue' }}>
					Second slide
				</Block>
				<Block style={{ backgroundColor: 'grey' }}>
					Third slide
				</Block>
				<Block style={{ backgroundColor: 'yellow' }}>
					Forth slide
				</Block>
			</Slider>
		</>;
	};
};
export default App;
