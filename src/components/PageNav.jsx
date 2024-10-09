import Prev from "../assets/prev.svg?react";
import Next from "../assets/next.svg?react";
import { useNavigate, useLocation } from "react-router-dom";

export const PageNav = ({ page, totalPages }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.substring(
    0,
    location.pathname.replace(/\/$/, "").lastIndexOf("/")
  );

  const handlePrev = () => {
    if (page > 1) {
      navigate(`${path}/${Number(page) - 1}`);
      window.scrollTo(0, 0);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      navigate(`${path}/${Number(page) + 1}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="flex justify-center items-center py-6 fill-white">
      <button disabled={page === 1} onClick={handlePrev}>
        <Prev className="w-10 h-10" />
      </button>
      <h1 className="text-lg mx-2">{page}</h1>
      <button disabled={page === totalPages} onClick={handleNext}>
        <Next className="w-10 h-10" />
      </button>
    </nav>
  );
};
