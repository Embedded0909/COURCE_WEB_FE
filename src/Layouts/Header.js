import "./Header.css";
import mLogo from "../images/logo.png"
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";


function Header({ onReload }) {
  const [user, setUser] = useState(null);
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };
  return <><menu className="top_menu flex">
    <section className="flex_content">
      <a href="https://www.facebook.com/profile.php?id=61566965671067">
        <i className="fa fa-envelope-o"></i> embedded09092002@gmail.com
      </a>
      <a href="https://www.facebook.com/profile.php?id=61566965671067">
        <i className="fa fa-headphones"></i> 0123456789
      </a>
    </section>
    <section className="flex_content">
      <a href="https://www.facebook.com/profile.php?id=61566965671067" title="Facebook">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61566965671067" title="Instagram">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61566965671067" title="Twitter">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="#" title="youtube">
        <i className="fa fa-youtube"></i>
      </a>
    </section>
  </menu>

    <nav>
      <section className="flex_content">
        <figure className="logo fixed_flex">
          <img src={mLogo} alt="" />
          <figcaption>
            <strong className="title">Học Cùng ET</strong> Embedded
          </figcaption>
        </figure>
      </section>
      <section className="flex_content nav_content" id="nav_content">
        <a href="" className="active">
          TRANG CHỦ
        </a>
        <a href="">TEST</a>
      </section>
      <section className="flex_content">
        {/* <a href="" className="ham">
          <i className="fa fa-bars"></i>
        </a> */}
        <div className="ham" style={{ padding: 30 }}>
          {!user ? (<>
            <button className="google-btn" onClick={loginWithGoogle}>Đăng nhập</button> <i class="fa-brands fa-google"></i> </>
          ) : (
            <div>
              {/* <h2>Xin chào, {user.displayName}</h2> */}
              <img src={user.photoURL} alt="avatar" width={50} style={{ borderRadius: "50%" }} />
              {/* <p>Email: {user.email}</p> */}
              {/* <button onClick={logout}>Đăng xuất</button> */}
            </div>
          )}
        </div>
      </section>
    </nav></>;
}

export default Header;
