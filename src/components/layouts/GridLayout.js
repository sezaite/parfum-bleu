const GridLayout = (props) => {
    return ( 
            <div className="grid-container">
                <div className="grid-row">
                    {props.children}
                </div>
            </div>
     );
}
 
export default GridLayout;