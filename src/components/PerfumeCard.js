import getImage from "../helpers/getImage";
import { Link } from "react-router-dom";

import { useEffect } from "react";

const PerfumeCard = ({id, title, price, house, img}) => {



    return ( 

        <div className="col-3 col-md-4 col-sm-6 col-xs-12 card perfume-card">
            <Link to={`/perfume-page/${id}`} >
           <img src={getImage(img)} alt="perfume bottle" />
           <div className="d-flex justify-content-between align-items-center perfume-card-info-wrap">
                <h3 className="card-title">{title}</h3>
                <h5 className="price-tag">{price}</h5>
           </div>
           </Link>
        </div>
    
      );
}
 
export default PerfumeCard;