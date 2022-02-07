
import React from 'react';
import '../css/addproducts.css'

export const AddProducts = () => {
    return <div>
        <div className='container' >
            <h1>ADD PRODUCTS</h1>
            <hr></hr>
            <label for="exampleFormControlInput1" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name.." />
            <label for="exampleFormControlInput1" class="form-label">Product Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price.." />
            <label for="formFile" class="form-label">Add Your Product Image</label>
            <input class="form-control" type="file" id="formFile"></input>
            <div className='lower-btn'></div>
            <button type="button" class="btn btn-success">Add</button>
        </div>
    </div>;
};
