import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


import Modal from '../components/layouts/modal';
import Product from './product';

function ProductsList() {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedFavProducts, setselectedFavProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ dataModal , setDataModal] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState('');
  const [tshow, setTShow] = useState(false);



  const ModalHandler = (myData)=>{
    setShowModal((prev) => !prev);
    setDataModal(myData)

}


  const buyProductHandel = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setCartCount(selectedProducts.length + 1); // Update cart count
    setTShow(true);
    setMessage('Product added to cart successfully.');
  };

  const favProductHandel = (favProduct) => {
    setselectedFavProducts([...selectedFavProducts, favProduct]);
  };


  const handleRemoveFromCart = (indexToRemove) => {
    setSelectedProducts(selectedProducts.filter((_, index) => index !== indexToRemove));
    setCartCount(selectedProducts.length - 1); // Update cart count
  };

  const handleRemoveFromFav = (indexToRemove) => {
    setselectedFavProducts(selectedFavProducts.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
{  message && (

<Toast onClose={() => setTShow(false)} show={tshow} delay={1000} autohide className="d-inline-block m-1"
          bg='dark' style={{position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 0,
          zIndex: 99,}}>
<Toast.Header>Action:</Toast.Header>
<Toast.Body> <span style={{color:'white'}}>{message}</span></Toast.Body>

</Toast>
)

}

<Modal show={showModal} close={ModalHandler}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px' }}>
  {dataModal === "Cart" && (
    <div>
      <p>Cart:</p>
      {selectedProducts.map((product, index) => (
        <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>{product.productName}</span>
        <img src={product.imgSrc} alt={product.productName} style={{ width: '90px', height: '120px', paddingBottom: '5px', paddingTop: '5px' }} />
        <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
      </div>
      ))}
    </div>
  )}

  {dataModal === "Fav" && (
    <div>
      <p>Favorit:</p>
      {selectedFavProducts.map((favProduct, index) => (
        <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>{favProduct.productName}</span>
        <img src={favProduct.imgSrc} alt={favProduct.productName} style={{ width: '90px', height: '120px', paddingBottom: '5px', paddingTop: '5px' }} />
        <button onClick={() => handleRemoveFromFav(index)}>Remove</button>
      </div>
      ))}
    </div>
  )}
</div>

         
</Modal>

<div style={{ display:'flex' , justifyContent:'end',marginTop:'15px'}}>
<img src="heart.png" width={38} onClick={() => ModalHandler("Fav")} />
<img src="cart.png" style={{ width: '35px'}} onClick={()=> ModalHandler("Cart") } /><Badge bg="secondary">{cartCount}</Badge>
</div>




    
   <Container className="mt-3">
    <Row>
        <Col xs={12} md={4}>
          <Product imgSrc="prod1.jpg" productName="Food 1" productDesc="vitamin and food 1" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod2.jpg" productName="Food 2" productDesc="vitamin and food 2"  ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod3.jpg" productName="Food 3" productDesc="vitamin and food 3" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
    </Row>

    <Row>
        <Col xs={12} md={4}>
          <Product imgSrc="prod4.jpg" productName="Food 4" productDesc="vitamin and food 4" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod5.jpg" productName="Food 5" productDesc="vitamin and food 5" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod6.jpg" productName="Food 6" productDesc="vitamin and food 6" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
    </Row>


    <Row>
        <Col xs={12} md={4}>
          <Product imgSrc="prod7.jpg" productName="Food 7" productDesc="vitamin and food 7" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod2.jpg" productName="Food 8" productDesc="vitamin and food 8" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
        <Col xs={12} md={4}>
        <Product imgSrc="prod3.jpg" productName="Food 9" productDesc="vitamin and food 9" ProductHandel={buyProductHandel} FavHandel={favProductHandel}  />
        </Col>
    </Row>
   </Container>
    

    <p>&nbsp;</p><p>&nbsp;</p>
    </>

  );
}

export default ProductsList;