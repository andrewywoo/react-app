import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>Tags is empty!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement(countNumber) {
    console.log("increment clicked", this);
    //State is immutable. Pass an object to append or change the count value.
    this.setState({ count: this.state.count + 1 });
    //testing passing arguments with arrow notation
    //this.setState({ count: countNumber });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={() => this.handleIncrement(5)}
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
