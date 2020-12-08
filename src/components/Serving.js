import React from "react";

export default function Serving(props) {
  return (
    <section className="servingDisplay">
      <h2>Currently serving</h2>
      {props.data.serving.map((person) => {
        return (
          <div>
            <img className="rocket2" src="https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42598-rocket-icon.png" />
            <p>Nr. {person.id}</p>
          </div>
        );
      })}
    </section>
  );
}
