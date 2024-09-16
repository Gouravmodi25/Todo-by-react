const EventHandling = () => {
  function handleClick(event) {
    console.log(event);
    alert("Click event");
    console.log(event.target);
    console.log(event.type);
  }
  function handlePrintName(name) {
    console.log(` ${name} name:`);
  }
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(event) => {
          console.log(event.target);
          console.log(event);
          alert("button 2");
        }}>
        Button 2
      </button>
      <button onClick={(event) => handleClick(event)}>Button 3</button>
      <button onClick={() => handlePrintName("name")}>Btn with argument</button>
    </>
  );
};

export default EventHandling;
