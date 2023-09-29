interface Props {
  children: string;
}

const ComingSoon = ({ children }: Props) => {
  return (
    <div className="w-screen max-w-full h-screen flex items-center justify-center">
      <div className="text-4xl max-w-lg">{children}</div>
    </div>
  );
};

export default ComingSoon;
