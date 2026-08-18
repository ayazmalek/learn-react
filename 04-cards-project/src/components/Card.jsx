import React from "react";
import { Bookmark } from "lucide-react";

const Cards = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10"
            alt=""
          />

          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div className="tag">
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <div>$120/hr</div>
          <p>Mumbai, India</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;