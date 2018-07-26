import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			good: 0,
			neutral: 0,
			bad: 0,
			average:0,
			percentageOfGoods:"0%",
			empty:true
		}
		this.handleCriticism = this.handleCriticism.bind(this);
	}
	handleCriticism(event){
		let value = event.target.value;
		let good = this.state.good;
		let neutral = this.state.neutral;
		let bad = this.state.bad;
		if(value==="hyvä"){
			good+=1
		}
		else if (value==="neutraali"){
			neutral+=1
		}
		else{
			bad+=1
		}
		let numerator = good*1+bad*-1;
		let denominator =good+neutral+bad;

		this.setState({good:good,
			           neutral:neutral,
			           bad:bad,
					   average:(numerator/denominator),
					   percentageOfGoods:((good/denominator)*100).toFixed(2)+"%",
					   empty:false
					  })
	}
	render(){
		return(
			<div>
				<h1>anna palautetta</h1>
				<div>
					<Button handler={this.handleCriticism} value="hyvä"/>
					<Button handler={this.handleCriticism} value="neutraali"/>
					<Button handler={this.handleCriticism} value="huono"/>
				</div>
				<div>
					<Statistics good={this.state.good}
								neutral={this.state.neutral}
								bad={this.state.bad}
								average={this.state.average}
								percentageOfGoods={this.state.percentageOfGoods}
								empty={this.state.empty}
					/>
				</div>
			</div>
	)
	}
}

const Button = (props)=>{
	return <input onClick={props.handler} type="button" value={props.value}/>
}
const Statistic = (props)=>{
	return (<tr>
				<td>{props.header}</td>
				<td>{props.value}</td>
			</tr>)
}
const Statistics = (props)=>{
	if(props.empty === false){
		return(
		<div>
			<h2>statistiikka</h2>
			<table>
				<tbody>
					<Statistic header="hyvä" value={props.good}/>
					<Statistic header="neutraali" value={props.neutral}/>
					<Statistic header="huono" value={props.bad}/>
					<Statistic header="keskiarvo" value={props.average}/>
					<Statistic header="positiivisia" value={props.percentageOfGoods}/>
				</tbody>
			</table>
		</div>
		)
	}
	else{
		return(
		<div>
			<h2>statistiikka</h2>
			<p> ei yhtään palautetta annettu</p>
		</div>
		)
	}
	
}
ReactDOM.render(<App />, document.getElementById('root'));

