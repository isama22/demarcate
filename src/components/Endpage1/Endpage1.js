import React from "react";
import "./Endpage1.css";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Endpage1 extends React.Component {

handleAddLine = (e) => {
    e.preventDefault();
    this.props.addLine(e)
};

  render() {
    const { props } = this;
    return (
      <div className="main-div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="p">
          <p id="headerp">
            <strong>Don't Let Me Be Wistful</strong>
            <em>Dana Ward</em>
          </p>
          <p>
            The heat out there this evening is contained heat like things keep
            applicable boxes at the ready then subsume their diverging
            constituent parts long ambivalent talks into midnight, all those
            glowy Sophia Coppola movies, Prosecco the sexiest records I know. I
            don't feel how I know anymore to be more than something seeking my
            appalling lack of cinematic knowledge, fictive innocence & something
            like the break-down of those little boxes little tombs put their
            hands up in front of my mouth there's a tacitly humiliating eulogy
            to drown out couldn't feel much more stupid about feeling stupid
            over feeling stupid, living. Let me go & watch something moving
            several images some of them symbolize humility broken postures
            bloodshot eyes, intimately talking through this publicly I am not
            developing at all but just the same
            <a
              href="https://www.poetryfoundation.org/poems/55982/dont-let-me-be-wistful"
              target="_blank"
              rel="noopener noreferrer"
              id="link"
            >
              ...
            </a>
          </p>
          <br/><br/>
          <section>
              {props.lines.map((l) => (
                  <article key={l.line}>
                      <div>{l.line}</div>
                      <div>{l.text}</div>
                  </article>
              ))}
              <form ref={props.formRef} onSubmit={props.addLine}>
                  <label>
                      <span>line</span>
                      <input 
                      name="line"
                      value={props.newLine.line}
                      onChange={props.handleChange}
                      />
                  </label>
                  <button onClick={props.addLine} disabled={props.formInvalid}>add a line</button>
              </form>
          </section>
          
        </div>
      </div>
    );
  }
}
export default Endpage1;