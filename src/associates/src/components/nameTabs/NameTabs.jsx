import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import sort from "fast-sort";
import NewMembers from "../newMembers/NewMembers.jsx";
import Letter from "../letter/Letter.jsx";
import "./nameTabs.css";

class NameTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.sortNames = this.sortNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.sortNames(this.props.names);

    let mostRecent = Math.max.apply(
      Math,
      this.props.names.map(name => {
        if (name.yearAdded) {
          return name.yearAdded;
        } else {
          return 0;
        }
      })
    );

    this.setState({
      recentlyAdded: mostRecent
    });
  }

  sortNames(names) {
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];
    let i = [];
    let j = [];
    let k = [];
    let l = [];
    let m = [];
    let n = [];
    let o = [];
    let p = [];
    let q = [];
    let r = [];
    let s = [];
    let t = [];
    let u = [];
    let v = [];
    let w = [];
    let x = [];
    let y = [];
    let z = [];

    const sortedNames = sort(names).asc([
      person => person.name.last,
      person => person.name.first,
      person => person.name.middle
    ]);

    sortedNames.forEach(person => {
      if (person.name.last[0] === "A") {
        a.push(person);
      }
      if (person.name.last[0] === "B") {
        b.push(person);
      }
      if (person.name.last[0] === "C") {
        c.push(person);
      }
      if (person.name.last[0] === "D") {
        d.push(person);
      }
      if (person.name.last[0] === "E") {
        e.push(person);
      }
      if (person.name.last[0] === "F") {
        f.push(person);
      }
      if (person.name.last[0] === "G") {
        g.push(person);
      }
      if (person.name.last[0] === "H") {
        h.push(person);
      }
      if (person.name.last[0] === "I") {
        i.push(person);
      }
      if (person.name.last[0] === "J") {
        j.push(person);
      }
      if (person.name.last[0] === "K") {
        k.push(person);
      }
      if (person.name.last[0] === "L") {
        l.push(person);
      }
      if (person.name.last[0] === "M") {
        m.push(person);
      }
      if (person.name.last[0] === "N") {
        n.push(person);
      }
      if (person.name.last[0] === "O") {
        o.push(person);
      }
      if (person.name.last[0] === "P") {
        p.push(person);
      }
      if (person.name.last[0] === "Q") {
        q.push(person);
      }
      if (person.name.last[0] === "R") {
        r.push(person);
      }
      if (person.name.last[0] === "S") {
        s.push(person);
      }
      if (person.name.last[0] === "T") {
        t.push(person);
      }
      if (person.name.last[0] === "U") {
        u.push(person);
      }
      if (person.name.last[0] === "V") {
        v.push(person);
      }
      if (person.name.last[0] === "W") {
        w.push(person);
      }
      if (person.name.last[0] === "X") {
        x.push(person);
      }
      if (person.name.last[0] === "Y") {
        y.push(person);
      }
      if (person.name.last[0] === "Z") {
        z.push(person);
      }
    });

    this.setState({
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z
    });
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });

    if (this.state.checked) {
      let recentlyAdded = [];

      this.props.names.forEach(person => {
        if (person.yearAdded === this.state.recentlyAdded) {
          recentlyAdded.push(person);
        }
      });

      this.sortNames(recentlyAdded);
    } else {
      this.sortNames(this.props.names);
    }
  }

  render() {
    return (
      <div>
        <NewMembers handleChange={this.handleChange} />
        <Tabs defaultActiveKey="a-b">
          <Tab eventKey="a-b" title="A-B">
            <h5>A</h5>
            <Letter
              names={this.state.a}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>B</h5>
            <Letter
              names={this.state.b}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab className="tab" eventKey="c-d" title="C-D">
            <h5>C</h5>
            <Letter
              names={this.state.c}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>D</h5>
            <Letter
              names={this.state.d}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="e-f" title="E-F">
            <h5>E</h5>
            <Letter
              names={this.state.e}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>F</h5>
            <Letter
              names={this.state.f}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="g-h" title="G-H">
            <h5>G</h5>
            <Letter
              names={this.state.g}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>H</h5>
            <Letter
              names={this.state.h}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="i-j" title="I-J">
            <h5>I</h5>
            <Letter
              names={this.state.i}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>J</h5>
            <Letter
              names={this.state.j}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="k-l" title="K-L">
            <h5>K</h5>
            <Letter
              names={this.state.k}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>L</h5>
            <Letter
              names={this.state.l}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="m-n" title="M-N">
            <h5>M</h5>
            <Letter
              names={this.state.m}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>N</h5>
            <Letter
              names={this.state.n}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="o-p" title="O-P">
            <h5>O</h5>
            <Letter
              names={this.state.o}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>P</h5>
            <Letter
              names={this.state.p}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="q-r" title="Q-R">
            <h5>Q</h5>
            <Letter
              names={this.state.q}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>R</h5>
            <Letter
              names={this.state.r}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="s-t" title="S-T">
            <h5>S</h5>
            <Letter
              names={this.state.s}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>T</h5>
            <Letter
              names={this.state.t}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="u-v" title="U-V">
            <h5>U</h5>
            <Letter
              names={this.state.u}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>V</h5>
            <Letter
              names={this.state.v}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
          <Tab eventKey="w-z" title="W-Z">
            <h5>W</h5>
            <Letter
              names={this.state.w}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>X</h5>
            <Letter
              names={this.state.x}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>Y</h5>
            <Letter
              names={this.state.y}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
            <h5>Z</h5>
            <Letter
              names={this.state.z}
              recentlyAdded={this.state.recentlyAdded}
            />
            <a className="topLink" href="#top">
              back to top
            </a>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NameTabs;
