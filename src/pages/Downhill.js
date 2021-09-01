import { Link } from "react-router-dom";

import React from "react";
import axios from "axios";

class Downhill extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
   axios.get("http://localhost:3000/downhill").then((res) => {
      const data = res.data;
      this.setState({ items: data });
    });
  }

  render() {
    return (
      <div className="downhill">
        <div className="px-4 md:px-16">
          <div className="breadcrumb">
            <Link className="px-2" to="/">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link className="px-2" to="/downhill">
              Downhill
            </Link>
          </div>
          <h1 className="px-2 py-1 mb-8 text-4xl font-black text-left font-mono">
            Downhill
          </h1>
          <div className="font-sans text-2xl border-t-2 border-b-2 h-20 sticky z-50 bg-white px-16 flex flex-row items-center justify-between">
            <div className="flex flex-initial items-center text-center">
              Filter by Gender
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="flex flex-initial items-center text-center">
              Filter by Size
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="flex flex-initial items-center text-center">
              Filter by Color
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 x-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
          <div className="card__collection clear-fix pt-8">
            {this.state.items.map((item) => (
              <div className="cards cursor-pointer" key={item.id}>
                <Link to={`/downhill/${item.id}`}>
                  <img src={item.img} className="w-full h-auto" alt="" />
                  <span className="cards__rect-1">
                    <span className="shadow-1">
                      <p>{item.label}</p>
                    </span>
                  </span>
                  <span className="cards__rect-2">
                    <span className="shadow-2">
                      <p>{item.price} $</p>
                    </span>
                  </span>
                  <span className="cards__rect-3">
                    <span className="shadow-1">
                      <p>NEW</p>
                    </span>
                  </span>
                  <span className="cards__rect-4">
                    <span className="shadow-2">
                      <p className=""></p>
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Downhill;
