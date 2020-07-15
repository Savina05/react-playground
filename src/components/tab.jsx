import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ""
    };
  }

  componentDidMount() {
    fetch('./assets/ajax/tab1.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          items: data.item.content
        });
      });
  }

  firstTab = () => {
    fetch('./assets/ajax/tab1.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          items: data.item.content
        });
      });
    document.getElementById('first').classList.add('tab_selection_active');
    document.getElementById('second').classList.remove('tab_selection_active');
    document.getElementById('third').classList.remove('tab_selection_active');
  }

  secondTab = () => {
    fetch('./assets/ajax/tab2.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          items: data.item.content
        });
      });
    document.getElementById('second').classList.add('tab_selection_active');
    document.getElementById('first').classList.remove('tab_selection_active');
    document.getElementById('third').classList.remove('tab_selection_active');
  }

  thirdTab = () => {
    fetch('./assets/ajax/tab3.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          items: data.item.content
        });
      });
    document.getElementById('third').classList.add('tab_selection_active');
    document.getElementById('first').classList.remove('tab_selection_active');
    document.getElementById('second').classList.remove('tab_selection_active');
  }


  render() {
    return (
      <div id="tabs">
        <div className="tabs">
          <p className="tab_selection tab_selection_active" id="first" onClick={this.firstTab}>
            Vestibulum at odio sit amet
            <span className="tab_icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>
          <p className="tab_selection" id="second" onClick={this.secondTab}>
            Sed vehicula neque
            <span className="tab_icon">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </p>
          <p className="tab_selection" id="third" onClick={this.thirdTab}>
            Nulla id libero pretium
            <span className="tab_icon">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </p>
        </div>
        <div className="tab_text">
          <p>{this.state.items}</p>
        </div>
      </div>
    );
  }
};

export default Tabs;
