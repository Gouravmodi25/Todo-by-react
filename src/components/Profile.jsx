import ProfileCard from "./ProfileCard";
const Profile = () => {
  return (
    <>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice! Have a wonderful Day</strong>
          </div>
        }>
        <p>Hobbies:Reading,Writing,Hiking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Bob"
        age={28}
        greeting={
          <div>
            <strong>Hi Bob! Have a wonderful Day</strong>
          </div>
        }>
        <p>Hobbies:Gaming,Cooking,Hiking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Gourav"
        age={21}
        greeting={
          <div>
            <strong>Hi Gourav! Have a wonderful Day</strong>
          </div>
        }>
        <p>Hobbies:Gaming,Cooking,Listening Music</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};

export default Profile;
