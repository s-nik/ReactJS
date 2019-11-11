import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import Button from 'components/Button';
import defineContentProps from './defineContentProps.js';

const RootWrapper = styled(Block)`
	overflow: hidden;
	width: 300px;
	height: 140px;
	border: 1px solid;
`;
const ContentWrapper = styled(Block)`
	overflow: hidden;
	height: 100%;
	width: ${({ slidesCount }) => `calc(100% * ${slidesCount})` };
	& > div {
		float: left;
		width: ${({ slideWidth = 100 }) => slideWidth +'%'};
		height: 100%;
	}
`;

class Slider extends React.Component {
	constructor (props) {
		super(props);

		this.defineContentProps = defineContentProps.bind(this);
	};

	static defaultProps = {
		defaultSlide: 0
	};	

	state = {
		scrollX: 0,
		currentSlide: this.props.defaultSlide,
	};

	slideTo = (slideIndex = 0) => (e) => {
		const { currentSlide = 0 } = this.state;

		if (slideIndex === currentSlide) {
			return;
		}

		const { 
			slideWidth,
			slidesCount 
		} = this.defineContentProps();
		const nextIndex = currentSlide < slideIndex ?
			currentSlide + 1 :
			currentSlide - 1;

		if (nextIndex >= 0 && nextIndex <= slidesCount - 1) {
			this.setState({
				scrollX: slideWidth * nextIndex,
				currentSlide: nextIndex,
			});
		}
	};

	render = () => {
		const { children = [] } = this.props;
		const { 
			scrollX = 0,
			currentSlide = 0 
		} = this.state;

		return <>
			<RootWrapper>
				<ContentWrapper 
					{ ...this.defineContentProps() }
					style={{
						transform: `translate(-${scrollX}%,0px)`,
						transition: 'ease .2s all'
					}}>
				{children}
				</ContentWrapper>
			</RootWrapper>
			<Button onClick={this.slideTo(currentSlide - 1)}>
				prev
			</Button>
			<Button onClick={this.slideTo(currentSlide + 1)}>
				next
			</Button>
		</>;
	};
};
export default Slider;
