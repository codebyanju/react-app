import React from "react";
import UserClass from "./UserClass";

// const AboutUs = () => {
//   const user = {
//     name: "Anju",
//     age: "30",
//   };

//   return (
//     <div>
//       <h2>AboutUs</h2>
//       <div>
//         <UserClass user={user} />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

class AboutUs extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent render");
    const user1 = {
      name: "Child 1",
      age: "30",
    };
    const user2 = {
      name: "child 2",
      age: "32",
    };

    return (
      <div>
        <h2>AboutUs</h2>
        <div>
          <UserClass user={user1} />
          <UserClass user={user2} />
        </div>
      </div>
    );
  }
}
export default AboutUs;
