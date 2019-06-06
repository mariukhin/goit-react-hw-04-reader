import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import { getIndex, getItemFromProps } from '../../../services/helper';
import items from '../../../assets/publications.json';

export default class Reader extends Component {
  state = {
    activeIndex: 1,
  };

  static propTypes = {
    history: PropTypes.shape.isRequired,
  };

  // eslint-disable-next-line consistent-return
  componentDidMount() {
    const { history } = this.props;
    const { activeIndex } = this.state;
    const item = getItemFromProps(this.props);
    if (!item) {
      return history.replace({
        pathname: '/reader',
        search: `?item=${1}`,
      });
    }
    history.push({
      pathname: '/reader',
      search: `?item=${activeIndex}`,
    });
  }

  onPublicationChange = name => {
    const { history } = this.props;
    if (name === 'backBtn') {
      history.push({
        pathname: '/reader',
        search: `?item=${Number(getItemFromProps(this.props)) - 1}`,
      });
    } else {
      history.push({
        pathname: '/reader',
        search: `?item=${Number(getItemFromProps(this.props)) + 1}`,
      });
    }
  };

  handleButton = ({ target: { name } }) => {
    const { activeIndex } = this.state;
    const indexMin = 0;
    const indexMax = items.length;
    const index = getIndex(items, items[activeIndex - 1]);
    if (name === 'backBtn') {
      if (index - 1 === indexMin) {
        this.setState({ activeIndex: indexMin + 2 });
      }
      this.setState(state => ({
        activeIndex: state.activeIndex - 1,
      }));
    } else {
      if (index + 1 === indexMax - 1) {
        this.setState({ activeIndex: indexMax - 1 });
      }
      this.setState(state => ({
        activeIndex: state.activeIndex + 1,
      }));
    }
    this.onPublicationChange(name);
  };

  render() {
    const { activeIndex } = this.state;
    const indexMax = items.length;

    return (
      <div className={styles.reader}>
        <Publication item={items[activeIndex - 1]} />
        <Counter activeIndex={activeIndex} itemTotal={indexMax} />
        <Controls onButtonClick={this.handleButton} disabled={activeIndex} />
      </div>
    );
  }
}
