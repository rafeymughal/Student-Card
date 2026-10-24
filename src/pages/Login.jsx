import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaLock,
} from "react-icons/fa6";
import { useAuth } from "../auth/AuthContext";
import "./Auth.css";

function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      login({ email, password });
      navigate("/");
    } catch (nextError) {
      setError(nextError.message);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-panel">
          <div className="auth-kicker">Student Desk</div>
          <h1>Welcome back</h1>
          <p>Log in to manage your student records from the same desk.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email</span>
              <div className="auth-input">
                <FaEnvelope aria-hidden="true" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@studentdesk.com"
                  autoComplete="email"
                />
              </div>
            </label>

            <label className="auth-field">
              <span>Password</span>
              <div className="auth-input">
                <FaLock aria-hidden="true" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((open) => !open)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>

            {error ? <p className="auth-message error">{error}</p> : null}

            <button className="auth-submit" type="submit">
              Log in
            </button>
          </form>

          <p className="auth-switch">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>

        <aside className="auth-aside">
          <div>
            <span className="auth-aside-mark">
              <FaGraduationCap />
            </span>
            <h2>Keep your class list close.</h2>
            <p>
              Search, add, and update student details in the olive Student Desk
              theme you already use.
            </p>
          </div>
          <ul>
            <li>
              <span className="auth-dot" />
              Save student names and roll numbers
            </li>
            <li>
              <span className="auth-dot" />
              Edit records without leaving the desk
            </li>
            <li>
              <span className="auth-dot" />
              Sign in from this same layout
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

export default Login;
