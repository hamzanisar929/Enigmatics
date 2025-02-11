import Lottie from "lottie-react";
import animationData from "../../assets/nodeAnimation.json";

function nodeAnimations() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={animationData}
        style={{ width: 150, height: 130 }}
      />
    </div>
  );
}

export default nodeAnimations;
