import close from "../../img/close.svg"

const LoginModal = () => {
    return ( 
        <div className="modal hidden" id="loginModal">
            <h1>Login</h1>
            <img className="close" src={close} alt="" />
            <form action="">
                <div className="form-group">
                    <label htmlFor="login-username">Username</label>
                    <input type="text" id="login-username"/>
                </div>
           
                <div className="form-group">
                    <label htmlFor="login-username">Password</label>
                    <input type="password" id="login-password"/>
                </div>
            </form>
            
        </div>
     );
}
 
export default LoginModal;