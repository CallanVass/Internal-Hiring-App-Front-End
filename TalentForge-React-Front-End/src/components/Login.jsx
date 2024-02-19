import React from "react";


const Login = () => {
  const logo_filepath = "./assets/talent_forge_logo.jpg";


    return (
        <>
            <div className="login">
                <img src={logo_filepath} alt="talent forge logo" />
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>

            </div>
        </>
    )
}

export default Login;
