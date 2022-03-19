import GridLayout from "../components/layouts/GridLayout";
import GridNav from "../components/nav/GridNav";
import GridFooter from "../components/footer/GridFooter";


const Landing = () => {
    return ( 
        <>
            <GridNav/>
            <main>
            <GridLayout>
                        <div></div>
                        <div></div>
                        <div></div>
            </GridLayout>
            </main>
            <GridFooter/>
        </>
     );
}
 
export default Landing;
