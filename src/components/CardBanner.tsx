import project1 from "../assets/project1.jpg";
import { motion } from "framer-motion";

const CardBanner = () => {
  return (
    <div className="w-full flex-col">
      <div className="mx-auto max-w-md my-8">
        <div className="text-4xl text-center font-bold">UI/UX</div>
        <div className="text-center">
          Here is where i give a brief overview of what i do with UI/UX
        </div>
      </div>

      <div className="max-w-4xl mx-8 md:mx-32 xl:mx-auto pt-8 grid grid-cols-2 gap-8 justify-items-center mb-8">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src={project1}
          className="w-full max-w-sm"
        ></motion.img>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          src={project1}
          className="w-full max-w-sm"
        ></motion.img>{" "}
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src={project1}
          className="w-full max-w-sm"
        ></motion.img>{" "}
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          src={project1}
          className="w-full max-w-sm"
        ></motion.img>
      </div>
    </div>
  );
};

export default CardBanner;
