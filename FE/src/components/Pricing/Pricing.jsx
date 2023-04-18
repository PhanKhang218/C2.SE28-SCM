import React from "react";
import "./Pricing.css";
import NavBar from "../NavBar/NavBar";
export default function Pricing() {
  return (
    <div>
      <NavBar />
      <div className="container-pricing">
        <div className="image-main">
          <img src="./img/pricing-menu.webp" />
        </div>
        <div className="tickets">
          {/* 1 */}
          <div className="club-box ticket">
            <img src="./img/ticket/class-pass.svg" />
            <div className="ticket-title">Class Pass</div>
            <p>
              A class pass offers one session to one class OR one time weight
              room use
            </p>
            <button>Book Trial</button>
          </div>
          {/* 2 */}
          <div className="club-box ticket">
            <img src="./img/ticket/day-pass.svg" />
            <div className="ticket-title">Day Pass</div>
            <p>
              A Day pass offers one session to one class OR one time weight room
              use
            </p>
            <button>Book Trial</button>
          </div>
          {/* 3 */}
          <div className="club-box ticket">
            <img src="./img/ticket/premium.svg" />
            <div className="ticket-title">Premium</div>
            <p>
              A class pass offers one session to one class OR one time weight
              room use
            </p>
            <button>Book Trial</button>
          </div>
          {/* 4 */}
          <div className="club-box ticket">
            <img src="./img/ticket/class-pass.svg" />
            <div className="ticket-title">Class Pass</div>
            <p>
              A class pass offers one session to one class OR one time weight
              room use
            </p>
            <button>Book Trial</button>
          </div>
          {/* 5 */}
          <div className="club-box ticket">
            <img src="./img/ticket/class-pass.svg" />
            <div className="ticket-title">Class Pass</div>
            <p>
              A class pass offers one session to one class OR one time weight
              room use
            </p>
            <button>Book Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}
