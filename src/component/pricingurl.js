import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090";

class UrlService {

  

    createPriceList(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/pricingfor', employee);
    }

    getPriceListById(itemsId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getpricing/' + itemsId);
    }

    updatePriceList(employee, itemsId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/updateprice/' + itemsId, employee);
    }

    deletePriceList(itemsId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/deleteprice/' + itemsId);
    }
}

export default new UrlService()