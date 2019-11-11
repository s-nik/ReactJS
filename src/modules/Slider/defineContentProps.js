
export default function() {
	const { children = [] } = this.props;
	const slidesCount = children.length || 1;
	const slideWidth = +(100 / slidesCount).toFixed(2);

	return { slideWidth, slidesCount };
};

