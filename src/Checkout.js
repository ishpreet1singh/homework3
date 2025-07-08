import { useEffect, useState } from 'react';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    const newSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const newTax = newSubtotal * 0.05;
    const newGrandTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setGrandTotal(newGrandTotal);
  }, [cart]);

  const removeItem = (name) => {
    const newCart = cart.filter((item) => item.name !== name);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#d32f2f', marginBottom: '30px' }}>Checkout</h1>

      {cart.length === 0 ? (
        <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>🛒 Your cart is currently empty.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.name} style={itemStyle}>
                <span>{item.name} (x{item.qty})</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button style={buttonStyle} onClick={() => removeItem(item.name)}>Remove</button>
              </div>
            ))}
          </div>

          <div style={totalStyle}>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (5%): ${tax.toFixed(2)}</p>
            <p><strong>Grand Total: ${grandTotal.toFixed(2)}</strong></p>
          </div>

          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <button style={buttonStyle} onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff0e0',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
};

const totalStyle = {
  marginTop: '30px',
  fontSize: '1.2rem',
  textAlign: 'right',
};

const buttonStyle = {
  padding: '6px 12px',
  backgroundColor: '#d32f2f',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Checkout;
