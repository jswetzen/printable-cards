import React from 'react';
import './Book.css';
import { cards } from './Cards.js';

// Detailed card descriptions at
// https://hackernoon.com/35-cards-which-will-improve-your-backlog-refinement-process-and-engage-every-team-member-54f929fdd282

class Card extends React.Component {
  render () {
    const card = this.props.card;
    return (
      <div className="card">
        <span className="card-top-number">{card.number}</span>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.text}</div>
        <div className="card-bottom-number">{card.number}</div>
      </div>
    );
  }
}

class Page extends React.Component {
  render () {
    const cardsPerRow = 3;
    var rows = [];
    for(let i=0, j=this.props.cards.length; i < j; i += cardsPerRow) {
      let cards = [];
      this.props.cards.slice(i, i + cardsPerRow).forEach((card, k) => {
        cards.push(<Card key={i+k} card={card} />);
                 });
        rows.push(
          <header className="table-row" key={'row'+i}>
            {cards}
          </header>
        );
    }
    return (
      <div className="page">
        <div>
          {rows}
          </div>
      </div>
    );
  }
}

class Book extends React.Component {
  render() {
    const cards = this.props.cards;
    const cardsPerPage = 9;
    var pages = [];
    for(let i=0, j=cards.length; i < j; i += cardsPerPage) {
      pages.push(<Page key={i} cards={cards.slice(i, i + cardsPerPage)} />);
    }
    return (
      <div className="book">
        {pages}
      </div>);
  }
}

//window.print();

function App() {
  return <Book cards={cards} />;
}

export default App;
