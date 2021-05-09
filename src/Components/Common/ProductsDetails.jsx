import React from "react";

const ProductsDetail = ({ match, history }) => {
  return (
    <React.Fragment>
      <div>
        <h1>Movie Form - {match.params.id}</h1>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/products")}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProductsDetail;
