import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductCardSkeleton.css";

function ProductCardSkeleton() {
  return (
    <div className="wrapper">
      <Skeleton className="text-container" height={25} width={150} count={1} />
      <br />
      <div className="grid-container-desktop">
        {Array(8)
          .fill(0)
          .map((item, i) => {
            return (
              <li key={i} className="card-skeleton">
                <Skeleton className="img-container" height={356} width={257} />
                <div className="card-row">
                  <Skeleton
                    className="text-container"
                    height={25}
                    width={255}
                    count={2}
                  />
                </div>
              </li>
            );
          })}
      </div>
      <div className="grid-container-mobile">
        {Array(2)
          .fill(0)
          .map((item, i) => {
            return (
              <li key={i} className="card-skeleton">
                <Skeleton className="img-container" height={356} width={200} />
                <div className="card-row">
                  <Skeleton
                    className="text-container"
                    height={25}
                    width={60}
                    count={2}
                  />
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
