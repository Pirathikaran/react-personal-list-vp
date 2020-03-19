import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="person " />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="55" name="Jonh" job="developer" />
      <Person img="36" name="Pirathi" job="developer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nulla.
        </p>
      </Person>
      <Person img="67" name="Lax" job="paramedicine" />
    </section>
  );
};

render(<PersonList />, document.getElementById("root"));
