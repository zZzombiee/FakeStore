import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = (props) => {
  const { star } = props;
  const [rating, setRating] = useState(star);
  const stars = [1, 2, 3, 4, 5];
  const handleChangeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="text-center mx-auto w-fit flex">
      {stars.map((star, index) => {
        return (
          <FaStar
            key={index}
            style={{ color: rating >= index + 1 ? "orange" : "gray" }}
            className="w-4 h-4"
          />
        );
      })}
    </div>
  );
};

export default Star;
