import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummyName",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rajgharat07");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, bio, followers, following, html_url, avatar_url } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <h2 className="m-4 text-xl">Name: {name}</h2>
        <h2 className="m-4 text-xl">Bio : {bio}</h2>
        <h3 className="m-4 text-xl">Location: {location}</h3>
        <h4 className="m-4 text-xl">Followers : {followers}</h4>
        <h4 className="m-4 text-xl">Following : {following}</h4>
        <h3 className="m-4 text-xl">
          <a className="hover:bg-black hover:text-orange-200" href={html_url}>
            Link to Github
          </a>
        </h3>
      </div>
    );
  }
}

export default UserClass;
