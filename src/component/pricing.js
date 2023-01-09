import React, { Component } from 'react'
import UrlService from './pricingurl'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Listpricing extends Component {
    constructor(props) {
        super(props)

        this.state = {
                prices: []
        }
        this.addPrice = this.addPrice.bind(this);
        this.editprice = this.editprice.bind(this);
        this.deleteprice = this.deleteprice.bind(this);
    }

    deleteprice(itemsId){
        UrlService.deletePriceList(itemsId).then( res => {
            this.setState({prices: this.state.prices.filter(employee => employee.itemsId !== itemsId)});
        });
    }
 
    editprice(id){
        this.props.history.push(`/updateprice/${id}`);
    }

    componentDidMount(){
      
        axios.get(`http://localhost:8090/pricing`).then((res) => {
               this.setState({ prices: res.data});
            });;
    }

    addPrice(){
        this.props.history.push('/pricingfor/_add');
    }
    linkback(){
        this.props.history.push('/pricing');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Pricing  List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPrice}>Add Item</button>
                 </div>
               
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered text-center">

                            <thead>
                                <tr>
                                    <th> itemsId</th>
                                    <th> Items</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.prices.map(
                                        p => 
                                        <tr key = {p.itemsId}>
                                             <td> { p.itemsId} </td>   
                                             <td> {p.items}</td>
                                             <td> {p.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editprice(p.itemsId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteprice(p.itemsId)} className="btn btn-danger">Delete </button>

                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className = "row">
                    
                    <div className="col-lg-6 text-right">
                        <Link
                            className="btn btn-lg btn-primary form-label"
                            to="/admin"
                            
                        >
                        Back
                        </Link>
                         </div>
                 </div>

                 </div>

            </div>
        )
    }
}

export default Listpricing
