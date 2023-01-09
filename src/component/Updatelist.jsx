import React, { Component } from "react";
import UrlService from "./pricingurl";
import axios from "axios";
import swal from "sweetalert2";

class Updatelist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsId: this.props.match.params.id,
      items: "",
      price: "",
    };
    // alert(this.state.itemsId);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.updatePriceList = this.updatePriceList.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/getpricing/${this.state.itemsId}`).then(
      (response) => {
        //alert(response.data[0].price);
        let Pricefor = response.data;
        this.setState({
          //itemsId: Pricefor.itemsId,

          items: response.data[0].items,
          price: response.data[0].price,
        });
      },
      (error) => {
        swal.fire("Server is down");
      }
    );
  }

  updatePriceList = (e) => {
    e.preventDefault();
    let employee = {
      itemsId: this.state.itemsId,
      items: this.state.items,
      price: this.state.price,
    };
    console.log("employee => " + JSON.stringify(employee));
    console.log("itemsId => " + JSON.stringify(this.state.itemsId));
    UrlService.updatePriceList(employee, this.state.itemsId).then((res) => {
      this.props.history.push("/pricing");
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ items: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ price: event.target.value });
  };

  cancel() {
    this.props.history.push("/pricing");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Items </label>
                    <input
                      placeholder="Enter Item Which you wish to add"
                      name="firstName"
                      className="form-control"
                      value={this.state.items}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Enter Price"
                      name="lastName"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updatePriceList}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updatelist;
