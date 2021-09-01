import { Link, withRouter } from "react-router-dom";
import React from "react";
import axios from "axios";

class DownhillDetail extends React.Component {
  state = {
    item: null,
    sizeSelected: 0,
  };

  constructor() {
    super();

    this.sizes = [
      { id: 1, label: "XS" },
      { id: 2, label: "S" },
      { id: 3, label: "M" },
      { id: 4, label: "L" },
      { id: 5, label: "XL" },
    ];
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/downhill/${this.props.match.params.id}`).then((res) => {
      const item = res.data;
      this.setState({ item });
    });
  }

  render() {
    return (
      <div className="downhill-detail">
        <div className="px-4 md:px-16">
          <div className="breadcrumb">
            <Link className="px-2" to="/">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link className="px-2" to="/cross-country">
              Downhill
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link className="px-2" to={`/cross-country/${this.state.item?.id}`}>
              {this.state.item?.label}
            </Link>
          </div>
          <div className="flex flex-row pt-8">
            <div className="flex-1 clear-fix">
              <div className="cards">
                <img
                  className="w-full h-auto"
                  alt=""
                  src={this.state.item?.img}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col px-8">
              <h1 className="py-1 mb-8 text-4xl font-black">
                {this.state.item?.label}
              </h1>
              <div className="flex mb-4 flex-row text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="px-1 text-gray-500">4</span>
                <span className="px-1 text-gray-500">(14)</span>
              </div>
              <div className="text-3xl my-4">{this.state.item?.price} $</div>
              <div className="flex flex-row my-4">
                {this.sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`size-card${size.id === 1 ? " ml-0" : ""}${
                      size.id === this.state.sizeSelected ? " selected" : ""
                    }`}
                    onClick={() => {
                      this.setState({ sizeSelected: size.id });
                    }}
                  >
                    {size.label}
                  </div>
                ))}
              </div>
              <button className="my-4 py-4 bg-black hover:bg-green-special rounded-md text-white text-xl text-center w-full mx-1 cursor-pointer transition-all duration-300 ease-in-out">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DownhillDetail);
