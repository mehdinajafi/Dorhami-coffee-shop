import React ,{ useEffect, useState }from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Products from '../components/Products';
import axios from 'axios';
import '../styles/Menue.css';

const Menue = () => {
    // categories array keep categories as object 
    // this array set in useEffect that get data with axios from:
    // https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/Categories
    const [categories,setCategories] = useState([])
    useEffect(function(){
        axios.get('https://my-json-server.typicode.com/MehdiNjfi/coffee-shop-json-file/Categories')
            .then(res => {
                setCategories(res.data)
            })
    }, [])

    return (
        <Router>
        <h1 className="categories-title">دسته ها</h1>

        {/* Start categories section */}
        <section id="categories">
            {
                // Start map categories array
                categories.map(category => (
                    <Link to={`/menue/${category.link}`} key={category.id}>
                        <div key={category.id} className="category">
                            <img src={category.img} alt={category.name}/>
                            <span className="category-name">
                                {category.name}
                            </span>
                        </div>
                    </Link>
                ))
                // End map categories array
            }
        </section>
        {/* End categories section */}

        {/* Start show products by category selected */}
        <Switch>
            <Route path="/menue/:category" children={<Products/>} />
        </Switch>
        {/* End show products by category selected */}
        </Router>
    )
}

export default Menue;