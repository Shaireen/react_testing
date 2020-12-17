import React from "react";
import Time from "./Time";

export default function Header(props) {
  return (
    <header>
      <img onClick={() => props.changePage("home")} src="foobarlogo.png" className="logo" alt="logo" />
      <section className="dash-comp closing"> 
      <Time data={props.data} changeTheme={props.changeTheme}/>
      </section>
    </header>
  );
}
