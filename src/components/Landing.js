import React from "react";
import Dropdown from "./Dropdown";
import Popular from "./Popular";
import Queue from "./Queue";
import Bartenders from "./Bartenders";
// import Serving from "./Serving";
import AllBeers from "./AllBeers";
import WelcomeDropdown from "./Welcome";
import Time from "./Time";
import BigButtons from "./BigButtons"

// import Dropdown from "muicss/lib/react/dropdown";


 

export default function Landing(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");

  if (mediaQueryLaptop.matches) {
    return (
      <>
      <div className="dash-container">
      <section className="dash-comp welcome">
        <h1>Welcome to<br/><span>foobar!</span></h1>
        <p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>
      </section>
      <section className="dash-comp popular">
      <h2>Most popular beers</h2>
      <Popular beers={props.beers} data={props.data} />
      </section>
      <section className="dash-comp bartenders">
       <h2>The bartenders</h2>
       <Bartenders data={props.data} />
      </section>
      <section className="dash-comp closing-display closing">
      <Time data={props.data} />
      </section>
      <section className="dash-comp queue">
      <h2>Served today</h2>
        <p className="bold">XXX</p>
        <h2>The queue</h2>
        <Queue data={props.data}/>
      </section>
      <div className="dash-buttons">
      <BigButtons/>
      </div>
      
      <div className="dash-comp beer-info hidden">
    <AllBeers beers={props.beers} />
      </div>
      <div className="beer-info-buttons hidden">
      <BigButtons/>
      </div>
    </div>
      
    </>
    );
  } else {
  return (
    <>
    <div className="">
      <WelcomeDropdown
        heading={"Welcome!"}
        paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
      />
      <Dropdown heading={"served today"}/>
      {/* <Dropdown heading={"Currently serving"} paragraph={<Serving data={props.data} />} /> */}
      <Dropdown heading={"The queue"} paragraph={<Queue data={props.data} />} />
      <Dropdown heading={"Most popular beers"} paragraph={<Popular beers={props.beers} data={props.data} />} />
      <Dropdown heading={"The bartenders"} paragraph={<Bartenders data={props.data} />} />
      <BigButtons/>
      </div>
      <div className="dash-comp hidden">
      <AllBeers beers={props.beers} />
      </div>
    </>
  );
  }
}
