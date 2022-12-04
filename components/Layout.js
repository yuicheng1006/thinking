import { Children } from "react";

const Layout = ({ children }) => {
  return (
    <section id="Qaq">
      <div className="m_wrap">
        <div className="subtitle">我為什麼去法國上哲學課？</div>
        <div className="outline_border">
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
