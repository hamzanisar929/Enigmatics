import Lottie from "lottie-react";
import animationData from "../../assets/reactAnimation.json";

function reactAnimations() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        style={{ width: 130, height: 130 }}
      />
    </div>
  );
}

export default reactAnimations;
