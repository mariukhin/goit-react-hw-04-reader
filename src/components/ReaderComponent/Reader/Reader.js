import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import { getItemFromProps } from '../../../services/helper';
import items from '../../../assets/publications.json';

export default class Reader extends Component {
  state = {};

  static propTypes = {
    history: PropTypes.shape(PropTypes.string.isRequired).isRequired,
    location: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  };

  // eslint-disable-next-line consistent-return
  componentDidMount() {
    const { history, location } = this.props;
    const item = getItemFromProps(this.props);
    if (!item || Number(item) > items.length + 1) {
      return history.replace({
        pathname: location.pathname,
        search: `item=1`,
      });
    }
  }

  componentDidUpdate() {
    const { history } = this.props;
    const item = getItemFromProps(this.props);
    if (!item || Number(item) > items.length + 1) {
      history.push('/reader?item=1');
    }
  }

  updateHistory = index => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `item=${index}`,
    });
  };

  handleButton = ({ target: { name } }) => {
    return name === 'backBtn'
      ? this.updateHistory(Number(getItemFromProps(this.props)) - 1)
      : this.updateHistory(Number(getItemFromProps(this.props)) + 1);
  };

  render() {
    const item = getItemFromProps(this.props);
    const indexMax = items.length;

    return (
      <div className={styles.reader}>
        {Number(item) <= items.length + 1 && (
          <>
            <Publication item={items[Number(item) - 1]} />
            <Counter activeIndex={Number(item)} itemTotal={indexMax} />
            <Controls
              onButtonClick={this.handleButton}
              disabled={Number(item)}
            />
          </>
        )}
      </div>
    );
  }
}
