import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const Video = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <div className="container md:pb-10 flex items-center justify-center min-h-screen p-4 ">
        <motion.div
          className="w-full max-w-3xl bg-gray-800 p-6 rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Frontend
          </h1>
          <div className="relative w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src="https://www.youtube.com/embed/2FhgKp_lfJQ?si=3qz2N4FeaAO0lZN7"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Video;
