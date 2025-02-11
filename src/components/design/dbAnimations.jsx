import Lottie from "lottie-react";
import animationData from "../../assets/dbAnimation.json";

function dbAnimations() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={animationData}
        style={{ width: 130, height: 130 }}
      />
    </div>
  );
}

export default dbAnimations;
