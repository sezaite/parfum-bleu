import axios from 'axios';
import { useState, useEffect } from 'react';
import GridNav35 from '../components/layouts/GridNav35';
import GridLayout from '../components/layouts/GridLayout';
import bloom from "../img/blooms.png"
import { useParams } from "react-router-dom";
import getImage from '../helpers/getImage';
import PerfumeInnerSwiper from '../components/perfumes/PerfumeInnerSwiper';

const PerfumeInner = () => {
    const { id } = useParams();
    const [perfumeData, setPerfumeData] = useState({});
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState(null);
    const unsplashClientID = "F5Q0JwD8_nDZ11kw5slYkdP1YO3Vky0qqtdrRNdVPSo";


    useEffect(()=>{
        axios.all([
            axios.get("../data.json"),
            axios.get(`https://api.unsplash.com/search/photos/?client_id=${unsplashClientID}&query=perfumes&per_page=5&orientation=portrait`)
        ])
        .then(axios.spread((res1, res2) => {
           
        setPerfumeData(res1.data[id]);
        setMainImage(getImage(res1.data[id].img));
        setImages(res2.data.results);
       
        
    }))
    
    }, []);

    return ( 
        images.length ? 
        <GridLayout>
        <GridNav35 />
        <div className="col-5 col-sm-12">
            {
            mainImage ? <PerfumeInnerSwiper mainImg={mainImage} images={images}/> : <h3 className="error-message">cannot get the main image</h3>
            }
            
            {/* {
            perfumeData.img ? <img src={getImage(perfumeData.img)} alt="perfume bottle image" /> : <h3>No image</h3>
            } */}
        </div>
        <div className="col-2 col-md-0"></div>
        <div className="col-5 col-md-7 col-sm-12">

            <h1>{perfumeData.title}</h1>
            <h4>{perfumeData.house}</h4>
            <p>{perfumeData.about}</p>
        </div>
        </GridLayout> 
        : <h3 className="loading-message">Images loading...</h3>
        
     );
}
 
export default PerfumeInner;