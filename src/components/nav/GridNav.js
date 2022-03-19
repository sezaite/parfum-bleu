import GridLayout from "../layouts/GridLayout";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const GridNav = () => {
    return ( 
        <nav>
            <GridLayout>
                <Logo />
                <div></div>
                <NavMenu />

            </GridLayout>
        </nav>
     );
}
 
export default GridNav;