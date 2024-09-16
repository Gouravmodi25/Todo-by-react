const EventProps = () => {
  const HandleOnClick = (user) => {
    console.log("Hey", user);
  };
  const handleMouseEvent = () => {
    console.log("<Mouse Event>");
  };
  return (
    <WelcomeUser
      click={(user) => HandleOnClick(user)}
      MouseEnter={handleMouseEvent}
    />
  );
};

const WelcomeUser = (props) => {
  console.log(props);
  const handleGreeting = () => {
    console.log("Handle Greeting Event");
  };

  return (
    <>
      <button onClick={() => props.click("gourav")}>CLick Btn</button>
      <button onMouseEnter={props.MouseEnter}>Mouse Hover</button>
      <button onClick={handleGreeting}>Handle Greeting</button>
    </>
  );
};

export default EventProps;
