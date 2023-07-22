import React from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
    const params = useParams();
    console.log(params);

    return (
        <h1>Product</h1>
    )




}