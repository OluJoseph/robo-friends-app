import React, {Component} from 'react';
import './App.css';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Foot from '../Components/Foot';


class App extends Component {

    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json()
        ).then(users => {this.setState({ robots: users })}
        )
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        })
        if (this.state.robots.length === 0) { return <h1 className='tc'>loading...</h1> }else{
            return (
                <div className='tc'>
                    <h1 className = "f2">Robofriends</h1>
                    <SearchBox searchChange = {this.onSearch}/>
                    <Scroll>
                        <Cardlist robots = {filteredRobots}/>
                    </Scroll>
                    <Foot />
                    
                </div>
            );
        }
        
    }
}

export default App;