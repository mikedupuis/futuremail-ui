import React, {Component} from 'react';
import Header from './components/Header';
import NewMessageBox from './components/NewMessageBox';
import FuturemailList from './components/FuturemailList';
import FuturemailItem from './components/FuturemailItem';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listType: "",
			children: []
		};
	}

	render() {
		return (
			<div className="App">
				<Header title="Futuremail"/>
				<NewMessageBox/>
				<FuturemailList type={this.state.listType}>
					{this.state.children}
				</FuturemailList>
			</div>
		);
	}

	componentDidMount() {
		var type = this.state.listType.toUpperCase();
		if (type !== "")
			type = "/" + type;

		fetch('futuremails' + type).then(function(response) {
			return response.json();
		}).then(function(r) {
			var children = [];

			r.forEach(function(e) {
				children.push(<FuturemailItem subject={e.subject} time={e.sendTimeMS} content={e.message}/>);
			});

			this.setState({children: children});
		}.bind(this));
	}
};

export default App;
