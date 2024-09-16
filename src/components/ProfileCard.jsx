const ProfileCard = (props) => {
  const { name, age, greeting, children } = props;
  console.log(props);
  return (
    <>
      <h1>Name:{name}</h1>
      <h3>Age:{age}</h3>
      <div>{greeting}</div>
      <div>{children}</div>
    </>
  );
};

export default ProfileCard;
