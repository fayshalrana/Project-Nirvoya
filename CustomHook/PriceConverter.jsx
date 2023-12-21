const PriceConverter = ({ price }) => {
    return (
      <span>
        &#2547;{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BDT", 
          maximumFractionDigits: 2
        }).format(price*50).replace(/^(\D+)/, '')} 

        {/* // Don't Multiple if you want to use price as it is  */}
      </span>
    );
  };
  
  export default PriceConverter;
  