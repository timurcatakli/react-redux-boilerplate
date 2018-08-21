import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './style.scss';

class Header extends Component {
  state = {
    current: this.props.location.pathname,
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    this.props.history.push(e.key);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="/features">
          <Icon type="appstore" />Features
        </Menu.Item>
        <Menu.Item key="/gallery">
          <Icon type="appstore" />Gallery
        </Menu.Item>
        <Menu.Item key="/code-generator">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
