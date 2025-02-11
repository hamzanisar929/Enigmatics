import Lottie from "lottie-react";
import animationData from "../../assets/jsAnimation.json";

function jsAnimations() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={animationData}
        style={{ width: 110, height: 130 }}
      />
    </div>
  );
}

export default jsAnimations;
