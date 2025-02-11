import Lottie from "lottie-react";
import animationData from "../../assets/cssAnimation.json";

function cssAnimations() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        style={{ width: 150, height: 130 }}
      />
    </div>
  );
}

export default cssAnimations;
