import Card from 'react-bootstrap/Card';


export default function Product({ imgSrc, productName, productDesc, ProductHandel,FavHandel }) {

    const handleBuyClick = () => {
        console.log("Buy clicked:", { imgSrc, productName, productDesc });
        ProductHandel({ imgSrc, productName, productDesc }); // Pass the entire product object
      };


      const handleFavClick = () => {
        console.log("Buy clicked:", { imgSrc, productName, productDesc });
        FavHandel({ imgSrc, productName, productDesc }); // Pass the entire product object
      };

  return (
    <>
    <Card style={{ width: '18rem' , marginTop:'5rem'}}>
   
       <Card.Img variant="top" src={imgSrc} style={{  width: '150px', height:'250px', margin: '0 auto', paddingBottom: '25px', paddingTop: '25px' }} />

      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          {productDesc}
        </Card.Text>
       <div style={{ margin:'auto' , textAlign:'center'}} >
       <img src="buy.png" width={48} onClick={handleBuyClick} alt="Buy"  />
       &nbsp; <img src="heart.png" width={48} onClick={handleFavClick} alt="Fav"/>
       </div>
      </Card.Body>
    </Card>

    </>
  )
}
