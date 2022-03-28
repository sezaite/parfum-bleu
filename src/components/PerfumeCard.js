import getImage from "../helpers/getImage";
import { Link } from "react-router-dom";
import Sirdgela from "../components/iconComponent/Sirdgela"

import { useEffect, useState } from "react";

const PerfumeCard = ({id, title, price, house, img}) => {

const [isFavorite, setIsFavorite] = useState(false);

    return ( 

        <div className="col-3 col-md-4 col-sm-6 col-xs-12 card perfume-card">
           
            {/* <img className="favorite-icon" src={Sirdgela} alt="favorites icon" /> */}
            <Sirdgela isFavorite={isFavorite} onClick={()=> {setIsFavorite(currentState => !currentState)}} />
           <div className="img-wrap">
                <img className="card-image" src={getImage(img)} alt="perfume bottle" />
           </div>
           <Link to={`/perfume-page/${id}`}>
           <div className="d-flex justify-content-between align-items-center perfume-card-info-wrap">
                <h3 className="card-title">{title}</h3>
                <h5 className="price-tag">{price}</h5>
           </div>
           </Link>
        </div>
    
      );
}
 
export default PerfumeCard;