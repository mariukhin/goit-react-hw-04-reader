import React, { Component } from 'react';
import queryString from 'query-string';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import getIndex from '../../../services/helper';
import items from '../../../assets/publications.json';

export default class Reader extends Component {
  state = {
    activeIndex: 1,
  };

  onPublicationChange = () => {
    const { history, location } = this.props;
    const queryParams = queryString.parse(location.search);
    const { activeIndex } = this.state;
    history.push({
      pathname: '/reader',
      search: `?item=${activeIndex + 1}`,
    });
  };

  handleButton = ({ target: { name } }) => {
    const { activeIndex } = this.state;
    const indexMin = 0;
    const indexMax = items.length;
    const index = getIndex(items, items[activeIndex - 1]);
    if (name === 'backBtn') {
      if (index - 1 === indexMin) {
        this.setState({ activeIndex: indexMin + 2 });
        this.onPublicationChange();
      }
      this.setState(state => ({
        activeIndex: state.activeIndex - 1,
      }));
      this.onPublicationChange();
    } else {
      if (index + 1 === indexMax - 1) {
        this.setState({ activeIndex: indexMax - 1 });
        this.onPublicationChange();
      }
      this.setState(state => ({
        activeIndex: state.activeIndex + 1,
      }));
      this.onPublicationChange();
    }
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
