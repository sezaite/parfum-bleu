import axios from 'axios';
import { useState, useEffect } from 'react';
import GridNav35 from '../components/layouts/GridNav35';
import GridLayout from '../components/layouts/GridLayout';
import PerfumeCard from '../components/PerfumeCard';
import bloom from "../img/blooms.png"



const PerfumesGrid = () => {
    const [allPerfumes, setAllPerfumes] = useState([]);
    useEffect(()=>{
            axios.get("/data.json").then((res)=> {
                console.log(res)
                setAllPerfumes(res.data);
            })
    }, []);
    return ( 
        <GridLayout>
        <GridNav35 />
        <div className="four-spanner col-6 col-md-8 col-sm-12">
            <img src={bloom} alt="picture of flowers" />
        </div>
            {
                allPerfumes.length ?
                allPerfumes.map((perfume, index) =>(
                    <PerfumeCard key={index} id={perfume.id}  title={perfume.title} price={perfume.price} house={perfume.house} img={perfume.img}  />
                )) : "Loading"
            }
        </GridLayout>
        
      
       
     );
}
 
export default PerfumesGrid;