import React, { Component } from 'react';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseActive: false,
      activeClass: ''
    }
    this.collapseRef = React.createRef();
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    if(this.state.collapseActive){
      this.setCollapseHeight(0 + 'px');
      this.setState({activeClass: '', collapseActive: !this.state.collapseActive});
    }
  }
  handleCollapseActive() {
    const collapse = this.collapseRef.current;
    if(!this.state.collapseActive){
      this.setCollapseHeight(collapse.scrollHeight + 'px')
      this.setState({activeClass:'collapse__btn--active'})
    } else {
      this.setCollapseHeight('0px');
      this.setState({activeClass: ''})
    }
    this.setState({
      collapseActive: !this.state.collapseActive
    })
  }
  setCollapseHeight(height){
    const collapse = this.collapseRef.current;
    collapse.style.height = height;
  }
  render() {
    return (
      <div className="collapse">
				<div className="collapse__title u-margin-bottom-small">
					<span className={"collapse__btn " + this.state.activeClass} onClick={() => this.handleCollapseActive()}></span>
					<h1 className="collapse__title__text">{this.props.title}</h1>
				</div>
				<div className="collapse__content" ref={this.collapseRef}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Collapse;