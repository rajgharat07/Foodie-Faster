import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div className="border-2 text-center m-4 p-4">
      <h1 className="m-4 text-xl">About Us Page</h1>
      <UserClass name={"(class Component)"} location={"Delhi Class"} />
    </div>
  );
};

export default About;
