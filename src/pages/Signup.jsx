import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaLock,
  FaUser,
} from "react-icons/fa6";
import { useAuth } from "../auth/AuthContext";
import "./Auth.css";

function Signup() {
  const { user, signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in every field.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      signup({ name, email, password });
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
          <h1>Create your account</h1>
          <p>Join Student Desk and start keeping your class records in one place.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Full name</span>
              <div className="auth-input">
                <FaUser aria-hidden="true" />
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
            </label>

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
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
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

            <label className="auth-field">
              <span>Confirm password</span>
              <div className="auth-input">
                <FaLock aria-hidden="true" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                />
              </div>
            </label>

            {error ? <p className="auth-message error">{error}</p> : null}

            <button className="auth-submit" type="submit">
              Sign up
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

        <aside className="auth-aside">
          <div>
            <span className="auth-aside-mark">
              <FaGraduationCap />
            </span>
            <h2>A desk made for students.</h2>
            <p>
              Create an account once, then come back to the same cream, olive,
              and gold layout every time.
            </p>
          </div>
          <ul>
            <li>
              <span className="auth-dot" />
              Fast signup with your name and email
            </li>
            <li>
              <span className="auth-dot" />
              Stay signed in on this browser
            </li>
            <li>
              <span className="auth-dot" />
              Jump straight into the student list
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

export default Signup;
