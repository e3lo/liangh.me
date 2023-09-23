const NavigationBar = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex max-w-6xl w-full justify-between mx-32 my-6 p-1">
        <div>
          <button className="underline">Liang Heng</button>
        </div>
        <div className="flex gap-4">
          <div>Achievements</div>
          <div>Projects</div>
          <div>Hackathon</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
