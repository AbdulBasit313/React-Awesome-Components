import React, { useState } from 'react'
import classnames from 'classnames'
import './index.css'

const cards = [
  {
    id: 1,
    title: 'Explore The World',
    bg: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Wild Forest',
    bg: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Sunny Beach',
    bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  },
  {
    id: 4,
    title: 'City on Winter',
    bg: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: 5,
    title: 'Mountains - Clouds',
    bg: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
]

const ExpandingCards = () => {
  const [activeCard, setActiveCard] = useState<number>(1)

  const handleExpand = (cardId: number) => {
    setActiveCard(cardId)
  }

  return (
    <div className="container">
      {cards.map(({ id, title, bg }) => (
        <div key={id}
          className={classnames(
            'panel',
            activeCard === id && 'active'
          )}
          onClick={() => handleExpand(id)}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ExpandingCards
