import { useState, useEffect } from 'react';
import { addToCart } from './cartUtils';

function Menu() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  }, []);

  function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(sum.toFixed(2));
  }

  function handleAdd(dish) {
    addToCart(dish.name, dish.price);
    updateTotal();
    alert(`${dish.name} added to cart!`);
  }

  function clearCart() {
    localStorage.removeItem('cart');
    setTotal(0);
    alert('Cart cleared!');
  }

  return (
    <>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Dishes We Serve</h2>
        <div style={gridStyle}>
          {dishes.map((dish) => (
            <div key={dish.name} style={dishStyle}>
              <img src={dish.img} alt={dish.name} style={imgStyle} />
              <h3>{dish.name} - ${dish.price}</h3>
              <p>{dish.desc}</p>
              <button onClick={() => handleAdd(dish)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>🛒 Your Cart</h2>
        <p><strong>Total: ${total}</strong></p>
        <button onClick={clearCart}>Clear Cart</button>
        <a href="/checkout">
          <button style={{ marginTop: '10px' }}>Go to Checkout</button>
        </a>
      </section>
    </>
  );
}

const dishes = [
  {
    name: "Butter Chicken",
    price: 15,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgYVi2uIJU5_WaCy45wfkrGxpUkFZ65osjA&s",
    desc: "Rich, creamy tomato-based curry with tender chicken.",
  },
  {
    name: "Palak Paneer",
    price: 11.99,
    img: "https://rachnacooks.com/wp-content/uploads/2019/07/palak-paneer-2-1.jpg",
    desc: "Spinach curry with homemade cottage cheese cubes.",
  },
  {
    name: "Chole Bhature",
    price: 25,
    img: "https://madhurasrecipe.com/wp-content/uploads/2023/05/Chole-Bhature-Featured.jpg",
    desc: "Spiced chickpeas served with deep-fried bread.",
  },
  {
    name: "Lamb Rogan Josh",
    price: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVAVgfd51EUIW2QNek9p9N9h6B4BCG1DZGQ&s",
    desc: "Aromatic lamb curry with Kashmiri spices.",
  },
  {
    name: "Paneer Tikka",
    price: 8.99,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
    desc: "Grilled cottage cheese cubes marinated in yogurt and spices.",
  },
  {
    name: "Gulab Jamun",
    price: 5.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s",
    desc: "Soft, syrup-soaked dessert balls for a sweet finish.",
  },
];

const sectionStyle = {
  maxWidth: '1000px',
  margin: '40px auto',
  padding: '0 20px',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#d32f2f',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
};

const dishStyle = {
  backgroundColor: '#fff0e0',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Menu;
