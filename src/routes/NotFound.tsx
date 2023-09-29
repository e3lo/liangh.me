import ComingSoon from "../components/ComingSoon";
import NavigationBar from "../components/parts/NavigationBar";

const NotFound = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ComingSoon>
        I don't think this page exists... maybe try something else
      </ComingSoon>
    </>
  );
};

export default NotFound;
