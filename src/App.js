import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

class App extends Component {

  state = {cards: [
    {id:0, nome: "pasta al pesto", prezzo: 10.90, immagine: "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg", quantita:0},
    {id:1, nome: "pasta allo scoglio", prezzo: 10.90, immagine: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg", quantita:0},
    {id:2, nome: "pizza margherita", prezzo: 10.90, immagine: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg", quantita:0},
    {id:3, nome: "salame", prezzo: 5.0, immagine: "https://cdn.pixabay.com/photo/2017/08/15/20/16/salami-2645403_960_720.jpg", quantita:0},
    {id:4, nome: "hamburger", prezzo: 8.0, immagine: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg", quantita:0},
    {id: 5, nome: "torta di carote", prezzo: 5.0, immagine: "https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_960_720.jpg", quantita:0},
  ] }

  handleDelete = cardID => {
    const updatedCards = this.state.cards.filter(card => card.id !== cardID);
    this.setState({cards: updatedCards})
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantita++;
    this.setState({cards})
  }

  render(){ 
    return (
    <>
    <Navbar/>
    <div className = "container">
    <h1>Cosa desideri ordinare?</h1>
    <hr/>
    <div className="row">
      {this.state.cards.map(card =>(
        <Card
          key={card.id}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          card={card}
        />
      ))}
    </div>
    </div>
    
    </>
  );
}}
 

export default App;
