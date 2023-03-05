import React from "react";
import { Link } from "react-router-dom";
import {MdAddCircle} from 'react-icons/md'

export const Heading = () => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2xl">Employee Listing</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <MdAddCircle />
              <span className="pl-2">Add Employee</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;