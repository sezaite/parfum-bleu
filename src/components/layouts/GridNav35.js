import Logo from "../nav/Logo";
import NavMenu from "../nav/NavMenu";

const GridNav35 = () => {
    return ( 
       <>
            <div className="col-3">
                <Logo />
            </div>
            <div className="col-9">
                <NavMenu />
            </div>
       </>
     );
}
 
export default GridNav35;
