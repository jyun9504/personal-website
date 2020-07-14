import React from 'react';
import LoadingCard from '../LoadingCard';

class WorksCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			imageLoading: true
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
		this.image = React.createRef();
  }
  componentDidMount() {
		const img = this.image.current;
		if (img && img.complete) {
			this.handleImageLoaded();
		}
	}
	handleImageLoaded() {
		if (this.state.imageLoading && this.image.current.complete) {
			this.setState({ imageLoading: false });
		}
	}
	loadingCard () {
		if(this.state.imageLoading){
			return <LoadingCard />
		}
  }
  render() {
    return (
      <div className="works-card">
        <a href={ this.props.src }>
          <img 
            className="works-img" 
            src={ this.props.img } 
            alt="works" 
            onLoad={ this.handleImageLoaded }
            ref={ this.image }
          />
          { this.loadingCard() }
          <div className="works-content-block">
            <h2 className="works-title">{ this.props.title }</h2>
            <p className="works-content">{ this.props.content }</p>
          </div>
        </a>
      </div>
    )
  }
}

export default WorksCard;