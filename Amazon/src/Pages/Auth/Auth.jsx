import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../../assets/AmazonLogo.png";
import "./SignUp.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate(); // Correctly initialize `useNavigate`

  const authHandler = async (e) => {
    e.preventDefault();

    const action = e.target.name; // Determine if it’s sign in or sign up
    try {
      if (action === "signin") {
        setLoading({ ...loading, signIn: true });
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate("/"); // Navigate to the home page
      } else if (action === "signup") {
        setLoading({ ...loading, signUp: true });
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate("/"); 
      }
    } catch (err) {
      setError(err.message); 
      setLoading({ ...loading, [action === "signin" ? "signIn" : "signUp"]: false });
    }
  };

  return (
    <section className="login">
      <Link to="/">
        <img src={AmazonLogo} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className="login_container_button"
          >
            {loading.signIn ? (
              <ClipLoader color="#fff" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
          <p>
            By signing-in you agree to the Amazon Fake Clone Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Internet-Based Ads Notice.
          </p>
          <div>
            <button
              type="submit"
              name="signup"
              onClick={authHandler}
              className="login_registerButton"
            >
              {loading.signUp ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Create your Amazon Account"
              )}
            </button>
            {error && (
              <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Auth;
