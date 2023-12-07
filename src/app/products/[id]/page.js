import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        This is dynamic page: {params.id}
      </h2>
      <h2 className="text-5xl font-bold text-center">
        Search By: {searchParams.category} and Price {searchParams.price}
      </h2>
    </div>
  );
};

export default DynamicPage;
