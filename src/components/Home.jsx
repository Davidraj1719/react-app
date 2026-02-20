import axios from "axios";
import { useEffect } from "react";
import { Component1, Component2, Component3, ProductCardNew, ProductPreview } from "../component";
import { Dashboard } from "./products/Dashboard";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
       <>
       <Link to={'/component1'} className="text-blue-500 hover:underline">Home</Link>
       <br />
       <Link to={'/component2'} className="text-blue-500 hover:underline">Products</Link>
       <br />
       <Link to={'/component3'} className="text-blue-500 hover:underline">Orders</Link>
       <br />
       {/* <Dashboard /> */}
       {/* <Component1 />
       <Component2 />
       <Component3 /> */}
       </>
    )
} 
