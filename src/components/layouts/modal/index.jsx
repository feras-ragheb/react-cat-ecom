
const Modal = ({ children , show, close}) => {
if(!show){
    return;
}

  return (
    <>

      
      <div
        style={{
          width: "800px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 0,
          zIndex: 99,
          backgroundColor: "white",
          borderRadius: "5px",
          minHeight: "600px",
          border: "1px solid gray",
        }}
      >
        <div  onClick={close} style={{ cursor:"pointer" , display:"flex" , justifyContent:"end" , marginRight:"10px", marginTop:"0px"}} >X</div>

        
        <div>{children}</div>
        
      </div>
    </>
  );
};

export default Modal;