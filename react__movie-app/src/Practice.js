import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
    {
        id: 1,
        name: 'kimchi',
        image: 'https://inchob.github.io/Practice/ClockToDo-app/img/1.jpg',
        rating: 5,
    },
    {
        id: 2,
        name: 'sangiopsal',
        image: 'https://inchob.github.io/Practice/ClockToDo-app/img/2.jpg',
        rating: 4.5,
    },
    {
        id: 3,
        name: 'bibimbap',
        image: 'https://inchob.github.io/Practice/ClockToDo-app/img/3.jpg',
        rating: 3.5,
    },
    {
        id: 4,
        name: 'doncasu',
        image: 'https://inchob.github.io/Practice/ClockToDo-app/img/4.jpg',
        rating: 2.5,
    },
    {
        id: 5,
        name: 'gimbap',
        image: 'https://inchob.github.io/Practice/ClockToDo-app/img/thumbnail.jpg',
        rating: 1.5,
    },
];

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    // props의 오류를 체크해줌
};

// function renderFood(dish) {
//     console.log(dish);
//     return <Food name={dish.name} picture={dish.image} />;
// }

// function App() {
//   return (
//       <div>
//           {console.log(foodLike.map(renderFood))}
//           {foodLike.map(renderFood)}
//       </div>
//   );
// }

function App() {
    return (
        <div>
            {foodLike.map((dish) => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>
    );
}

export default App;
