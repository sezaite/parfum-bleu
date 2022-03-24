
import { useParams } from "react-router";

const PerfumeInner = () => {

    const { id } = useParams();
    return ( 
        <div className="perfume-inner-page">
            Perfume inner page
        </div>
     );
}
 
export default PerfumeInner;