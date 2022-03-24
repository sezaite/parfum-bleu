import GridLayout from "../layouts/GridLayout";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const GridNav = () => {
    return ( 
        <header>
            <GridLayout>
                <Logo />
                <div></div>
                <NavMenu />

            </GridLayout>
        </header>
     );
}
 
export default GridNav;