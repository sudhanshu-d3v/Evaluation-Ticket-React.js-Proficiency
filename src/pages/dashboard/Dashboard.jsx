import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
import axios from "axios";
import "./Dashboard.css";
import AddItem from "../../components/additem/AddItem";
import Sort from "../../components/sort/Sort";
import Search from "../../components/search/Search";

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSort, setShowSearchSort] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=9"
      );
      setList(response.data.products);
      //   console.log(response.data.products);
    };
    getData();
  }, []);

  const addItemToList = (newItem) => {
    setList([...list, newItem]);
  };

  const handleSortByName = () => {
    const sortedProductsByName = [...list].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setList(sortedProductsByName);
  };
  const handleSearch = (input) => {
    setSearchQuery(input);
    const filteredProducts = list.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredList(filteredProducts);
  };
  const showSearchSortSection = () => {
    setShowSearchSort(true);
  };

  const showAddItemSection = () => {
    setShowSearchSort(false);
  };

  return (
    <div className="outer">
      <div className="outer-box">
        <Header />
        <div className="toggle-options">
          <div className="option" onClick={showSearchSortSection}>
            Search & Sort
          </div>
          <div className="option" onClick={showAddItemSection}>
            Add New Item
          </div>
        </div>
        {showSearchSort ? (
          <div className="filter">
            <Search handleSearch={handleSearch} />
            <Sort handleSortByName={handleSortByName} />
          </div>
        ) : (
          <AddItem addItemToList={addItemToList} />
        )}
        <div className="list-grid">
          {searchQuery === ""
            ? list.map((item) => <Product key={item.id} item={item} />)
            : filteredList.length > 0
            ? filteredList.map((item) => <Product key={item.id} item={item} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
