import React, { Component } from 'react';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseActive: false,
      activeClass: ''
    }
    this.collapseRef = React.createRef();
  }
  handleCollapseActive () {
    const collapse = this.collapseRef.current;
    console.log(collapse.style)
    if(!this.state.collapseActive){
      collapse.style.height = collapse.scrollHeight + 'px';
      this.setState({activeClass:'collapse__btn--active'})
    } else {
      collapse.style.height = 0 + 'px';
      this.setState({activeClass: ''})
    }
    this.setState({
      collapseActive: !this.state.collapseActive
    })
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