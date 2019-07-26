import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.scss';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    );
  };

  pendingStatus = () => {
    return this.props.isPending ? (
      <h1>Loading</h1>
    ) : (
      <ErrorBoundary>
        <CardList robots={this.filterRobots()} />
      </ErrorBoundary>
    );
  };

  render() {
    if (this.props.isPending) return <h1>Loading</h1>;
    return (
      <div className="tc">
        <Header />
        <SearchBox onChange={this.props.handleChange} />
        <Scroll>{this.pendingStatus()}</Scroll>
      </div>
    );
  }
}

export default MainPage;
