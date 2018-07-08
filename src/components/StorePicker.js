import React from "react";
import { getFunName } from "../helpers.js";
export class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // Stop the form from submitting
    event.preventDefault();

    //2. get the text from that input
    console.log(this);

    // 3. Change the page to /store/whatever-they-entered
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
