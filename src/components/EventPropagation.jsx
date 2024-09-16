const EventPropagation = () => {
  const handleChild = (event) => {
    console.log(event);
    console.log("Child CLick ");
  };
  const handleParent = () => {
    // console.log(event);
    console.log("parent CLick ");
  };
  const handleGrand = () => {
    console.log("Grand click");
  };
  return (
    <div
      style={{
        width: "700px",
        height: "500px",
        backgroundColor: "red",
        padding: "100px",
      }}
      className="g-div"
      onClickCapture={handleGrand}>
      <div
        style={{
          width: "500px",
          height: "300px",
          backgroundColor: "green",
          padding: "100px",
        }}
        className="p-div"
        onClickCapture={handleParent}>
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundColor: "yellow",
            padding: "50px",
            textAlign: "center",
            fontSize: "2rem",
          }}
          className="child-div"
          onClickCapture={handleChild}>
          Click Me
        </div>
      </div>
    </div>
  );
};

export default EventPropagation;
