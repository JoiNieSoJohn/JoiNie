import React from "react";
import { Link } from "react-router-dom";

const CatagoryComponent = () => {
  return (
    <div className="catagories">
      <div>
        <ul className="weekdays">
          <li>
            <Link className="noStyle" to="#">
              SUN
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              MON
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              TUE
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              WED
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              THU
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              FRI
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              SAT
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="category">
          <li>
            <Link className="noStyle" to="#">
              #Art
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              #Sport
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              #Leisure
            </Link>
          </li>
          <li>
            <Link className="noStyle" to="#">
              #Community
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatagoryComponent;
