import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import { changeSearchField, requestRobots } from '../action';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    this.props.requestingRobots()
  }

  

  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robo-Friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = (state => {
  return {
    searchField: state.changeSearchField.searchField,
    robots: state.requestRobots.robots
  }
})

const mapDispatchToProps = (dispatch => {
  return {
    onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
    requestingRobots: () => dispatch(requestRobots())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
