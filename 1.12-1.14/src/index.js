import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      mostVotes: 0,
      pisteet:  [0, 0, 0, 0, 0,0]
      		   
    }
    this.randomAnecdote = this.randomAnecdote.bind(this);
    this.nextAnecdote = this.nextAnecdote.bind(this);
    this.vote = this.vote.bind(this);
  }
  nextAnecdote(){
  	this.setState({selected:anecdotes.length-1>this.state.selected?this.state.selected+1:0})
  }
  randomAnecdote(){
  	let index = Math.round(Math.random()*(anecdotes.length-1));
	this.setState({selected:index});
  }
  vote(event){
  	let pisteet = this.state.pisteet;
  	pisteet[this.state.selected]+=1;
  	var mostVotes = this.state.mostVotes;
  	for(var i=0;i<pisteet.length;i++){
  		if(pisteet[mostVotes]<pisteet[i]){
  			mostVotes = i;
  		}
  	}
  	this.setState({pisteet:[...pisteet],mostVotes:mostVotes});
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]} has {this.state.pisteet[this.state.selected]} votes
        <div>
        	<Button handler={this.randomAnecdote} value="arvo anekdootti"/>
        	<Button handler={this.nextAnecdote} value="seuraava anekdootti"/>
        	<Button handler={this.vote} value="anna ääni"/>
      	</div>
      	<div>
        <MostVoted anecdote={this.props.anecdotes[this.state.mostVotes]} votes={this.state.pisteet[this.state.mostVotes]}/>
      	</div>
      </div>
    )
  }
}
const MostVoted = (props)=>{
  if(props.votes>0){
    return (
            <div>
              <h2>anecdote with most votes:</h2>
              {props.anecdote} has {props.votes} votes
            </div>
            )
  }
  else{
    return (
      <p>No votes has been given</p>
    )
  }

}

const Button = (props)=>{
	return <input type="button" onClick={props.handler} value={props.value}/>
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)