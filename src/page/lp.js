// src/lp.js
import React, { Component } from "react";
import ItemCard from "./components/itemcard";

class ListPage extends Component {
    state = {};

    render() {
        const { Data } = this.props;
        return (
            <ul className="list__itemview">
                {
                    Data && Data.map((itemdata, insertIndex) => {
                        return (
                            <ItemCard 
                                key={insertIndex}
                                ImageURL={itemdata.ImageURL}
                                BrandName={itemdata.BrandName}
                                GoodsName={itemdata.GoodsName}
                                />
                        );
                    })
                }
            </ul>
        );
    }
}
export default ListPage;