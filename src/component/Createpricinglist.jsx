import React, { Component } from 'react'
import UrlService from './pricingurl';

class Createpricinglist extends Component {
    constructor(props) {
        super(props)

       
        this.state = {
            itemsId : this.props.match.params.id,      
            items: '',
            price: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrupdatePriceList = this.saveOrupdatePriceList.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UrlService.getPriceListById(this.state.itemsId).then( (res) =>{
                let employee = res.data;
                this.setState({//itemsId: employee.itemsId,
                    
                    items : employee.items,
                    price: employee.price
                });
            });
        }        
    }
    saveOrupdatePriceList = (e) => {
        e.preventDefault();
        let employee = {items: this.state.items, price: this.state.price};
        console.log('employee => ' + JSON.stringify(employee));
        UrlService.createPriceList(employee).then(res =>{
            this.props.history.push('/pricing');
        });
        // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createPriceList(employee).then(res =>{
        //         this.props.history.push('/pricing');
        //     });
        // }else{
        //     EmployeeService.updatePriceList(employee, this.state.id).then( res => {
        //         this.props.history.push('/pricing');
        //     });
        // }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({items: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({price: event.target.value});
    }

  
    cancel(){
        this.props.history.push('/pricing');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add PriceList</h3>
        }else{
            return <h3 className="text-center">Update PriceList</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Items </label>
                                            <input placeholder="Add Items" name="firstName" className="form-control" 
                                                value={this.state.items} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price </label>
                                            <input placeholder="add price" name="lastName" className="form-control" 
                                                value={this.state.price} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrupdatePriceList}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Createpricinglist
