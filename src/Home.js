import React from 'react'
import "./Home.css";
import Product from "./product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"/>
            <div className="home__row">
                <Product
                    id="12344"
                    title ="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day Hardcover – 8 Sept. 2020"
                    price="	100,000 "
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41uTNjHt7KL._SX323_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12344"
                    title ="Emotional Intelligence Mastery: Why EQ is Important for Success and Matters More Than IQ: 2"
                    price="	12,0000 "
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41xEkq178OL._SX331_BO1,204,203,200_.jpg"
                />
            </div>            
            <div className="home__row">
                <Product
                    id="12344"
                    title ="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day Hardcover – 8 Sept. 2020"
                    price="	100,000 "
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41uTNjHt7KL._SX323_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12344"
                    title ="Creativity: A Short and Cheerful Guide Hardcover"
                    price="	12,0000 "
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41lTK+4LiAL._SX323_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12344"
                    title ="Emotional Intelligence Mastery: Why EQ is Important for Success and Matters More Than IQ: 2"
                    price="	12,0000 "
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41xEkq178OL._SX331_BO1,204,203,200_.jpg"
                />
            </div>            
        </div>
    )
}

export default Home
