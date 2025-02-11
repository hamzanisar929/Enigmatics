import Lottie from "lottie-react";
import animationData from "../../assets/htmlAnimation.json";

function htmlAnimations() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={animationData}
        style={{ width: 130, height: 130 }}
      />
    </div>
  );
}

export default htmlAnimations;
