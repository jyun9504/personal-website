import React from 'react';
import LinkGroup from '../LinkGroup';
import ImgAvatar from '../../assets/images/avatar1.png';
import LoadingCard from '../LoadingCard';

class BusinessCard extends React.Component {
  constructor() {
    super();
    this.state = {
      imageLoading: true
    };
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
      <div className="business-card">
        <div className="avatar">
          <img 
            className="avatar__img" 
            alt="avatar" 
            src={ ImgAvatar } 
            onLoad={ this.handleImageLoaded }
            ref={ this.image }
          />
          { this.loadingCard() }
        </div>
        <div className="profile">
          <h2 className="profile__name">Wang, Xiang-Lin</h2>
          <p className="profile__info">@jyun・Front-end developer</p>
        </div>
        <LinkGroup />
      </div>
    )
  }
}

export default BusinessCard;