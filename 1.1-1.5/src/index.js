import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  	}
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi}/>
      <Sisalto osat={kurssi.osat}
      />
      <Yhteensa osat={kurssi.osat}
      />
    </div>
  )
}
const Otsikko = (props)=>{
	return <h1>{props.kurssi}</h1>
}
const Sisalto = (props)=>{
	var osat = props.osat.map(
		function(osa){
			return <Osa key={osa.nimi} osa={osa}/>
		}
	)
	return (
		<div>
			{osat}		
		</div>
	)

}
const Osa = (props)=>{
	return <p>{props.osa.nimi} {props.osa.tehtavia}</p>
}
const Yhteensa = (props)=>{
	let yhteensa = props.osat.reduce((yhteensa,osa)=>yhteensa+osa.tehtavia,0);
	return <p>yhteensä {yhteensa} tehtävää</p>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)