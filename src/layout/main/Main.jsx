import React from "react";
import ImageCard from "../../components/image-card/ImageCard";
import FilterBar from "./filter-bar/FilterBar";

import "./Main.scss";

class Main extends React.Component {
  // const accessKey = "ca66pjxhkigqER_Nnn60-V4Nk7RbP9AaHSQX6wk4Zns";
  // https://api.unsplash.com/photos/?client_id=accesskey
  // 'https://api.unsplash.com/photos/?client_id=ca66pjxhkigqER_Nnn60-V4Nk7RbP9AaHSQX6wk4Zns'
  // .then(res=>{
  //   this.set
  // })

  render() {
    return (
      <div className="main">
        <FilterBar />

        <div className="display">
          {this.props.peopleData.map((data, i) => (
            <ImageCard key={i} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
