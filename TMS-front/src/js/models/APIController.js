import axios from 'axios';


export async function getBalance(type, categoryId, to, from) {

    return await axios.get('http://localhost:8080/spring-rest-demo/tms/balance', {
        params: {

            "type": type,
            "categoryId": categoryId,
            "to": to,
            "from": from
        }
    })

        .catch(error => {
            if (!alert(error.response.data.message)) { window.location.reload(); }
        });

};


export async function getTransactions(type, categoryId, to, from) {

    return await axios.get('http://localhost:8080/spring-rest-demo/tms/transactions', {
        params: {
            "type": type,
            "categoryId": categoryId,
            "to": to,
            "from": from
        }
    })
        .catch(error => {
            alert(error.response.data.message)
        });

};


export async function getCategory(id) {

    return await axios.get(`http://localhost:8080/spring-rest-demo/tms/category/${id}`)
        .catch(error => {
            alert(error.response.data.message)
        });
};


export async function getCategories(type) {

    return await axios.get('http://localhost:8080/spring-rest-demo/tms/categories', {
        params: {
            "type": type,
        }
    })
        .catch(error => {
            alert(error.response.data.message)
        });

};


export async function addCategory(value, dkey, icon) {

    await axios.post('http://localhost:8080/spring-rest-demo/tms/category', null, {
        params: {
            value,
            dkey,
            icon
        }
    })
        .catch(error => {
            alert(error.response.data.message)
        });
};


export async function updateCategory(id, value, dkey, icon) {

    return await axios.put(`http://localhost:8080/spring-rest-demo/tms/category/${id}`, null, {
        params: {
            value,
            dkey,
            icon
        }
    })
        .catch(error => {
            alert(error.response.data.message)
        });
};


export async function removeCategory(id) {

    return await axios.delete(`http://localhost:8080/spring-rest-demo/tms/category/${id}`, null, null)
        .catch(error => {
            alert(error.response.data.message)
        });
};


export async function addExpense(type, amount, icategory, date, comment) {

    return await axios.post('http://localhost:8080/spring-rest-demo/tms/expense', null, {
        params: {
            type,
            amount,
            icategory,
            date,
            comment

        }
    })

        .catch(error => {
            alert(error.response.data.message)
        });

};


export async function addIncome(type, amount, icategory, date, comment) {

    const balance = await axios.post('http://localhost:8080/spring-rest-demo/tms/income', null, {
        params: {
            type,
            amount,
            icategory,
            date,
            comment

        }
    })
        .catch(error => {
            alert(error.response.data.message)
        });
};

