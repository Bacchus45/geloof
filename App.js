
import React, { useState } from 'react';
import './App.css';

function convertZARtoGLO(zar) {
  return zar;
}

function convertZARtoCrypto(zar, rate) {
  return (zar / rate).toFixed(4);
}

const productsData = [
  { id: 1, name: "Brood", price: 10, image: "https://via.placeholder.com/300x200?text=Brood", sunoAudio: "" },
  { id: 2, name: "Melk", price: 8, image: "https://via.placeholder.com/300x200?text=Melk", sunoAudio: "" },
  { id: 3, name: "Rys", price: 12, image: "https://via.placeholder.com/300x200?text=Rys", sunoAudio: "" }
];

function App() {
  const [eerPunte, setEerPunte] = useState(0);
  const [engelSaad, setEngelSaad] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const giveEer = () => {
    setEerPunte(eerPunte + 5);
    setEngelSaad(engelSaad + 1);
  };

  return (
    <div className="App">
      <h1>Tiepe Geloof</h1>
      <p>Jy is nie alleen nie.</p>
      <p>Eer Punte: {eerPunte} | Engel Saad: {engelSaad}</p>
      <button onClick={giveEer}>Gee Eer 🙌</button>

      <h2>Produkte</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id} onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
            <img src={product.image} alt={product.name} width="300" />
            <p>{product.name} - R{product.price} | {convertZARtoGLO(product.price)} GLO | {convertZARtoCrypto(product.price, 15)} CELO</p>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div>
          <h3>{selectedProduct.name} TikTok-styl ervaring</h3>
          <img src={selectedProduct.image} alt={selectedProduct.name} width="300" />
          <p>Hier sal 'n klank- of stemopname wees.</p>
        </div>
      )}
    </div>
  );
}

export default App;
