import React from "react";
import ImageCard from "../../components/image-card/ImageCard";
import FilterBar from "./filter-bar/FilterBar";

import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      peopleData: [
        {
          name: "williams pepple",
          location: "seating aple",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
        {
          name: "aliggato pepple",
          location: "startrek oliga",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
        {
          name: "admind alobama",
          location: "denmark, illinois",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
        {
          name: "syndicate employee",
          location: "laos, chine",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
        {
          name: "gomora statham",
          location: "aso rock, koe",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
        {
          name: "lupillle lacido",
          location: "nigeria, aso",
          age: 27,
          imageUrl: `https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80`,
        },
      ],
    };
  }
  render() {
    return (
      <div className="main">
        <FilterBar />

        <div className="display">
          {this.state.peopleData.map((data, i) => (
            <ImageCard {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
