import { motion } from "framer-motion";

interface Props {
  children: string;
}

const ComingSoon = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-screen max-w-full h-screen flex items-center justify-center"
    >
      <div className="text-4xl max-w-lg">{children}</div>
    </motion.div>
  );
};

export default ComingSoon;
