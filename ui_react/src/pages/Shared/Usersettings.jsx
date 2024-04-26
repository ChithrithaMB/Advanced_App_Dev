import React, { useState } from 'react';

import { FiEdit, FiKey, FiUser } from 'react-icons/fi';
import Usertitlebar from '../../components/Shared/Usertitlebar';

const UserSettings = () => {
  const [editModel, setEditModel] = useState(false);
  const [editKeyModel, setEditKeyModel] = useState(false);

  return (
    <>
      <Usertitlebar Title="Settings" />
      <div className="h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]">
        <div className="h-[40vh] w-[50vw] flex flex-row shadow-md shadow-blue-/20">
          <div className="w-1/2 h-full flex flex-col">
            <div className="h-1/6 w-full flex justify-end items-center px-3 gap-3">
              <button
                className="p-2 border-2 border-blue-300/50 hover:border-blue-400 hover:bg-blue-200/40 rounded-full"
                onClick={() => {
                  setEditModel(true);
                }}
              >
                <FiEdit className="text-blue-300" /> 
              </button>
              <button
                className="p-2 border-2 border-blue-300/50 hover:border-blue-400 hover:bg-blue-200/40 rounded-full"
                onClick={() => {
                  setEditKeyModel(true);
                }}
              >
                <FiKey className="text-blue-300" /> 
              </button>
            </div>
            <div className="h-3/6 w-full flex justify-center items-center">
              <FiUser className="text-blue-500 text-6xl" />
            </div>
            <div className="h-2/6 w-full flex justify-center items-center">
              <p className="text-3xl font-bold text-blue-500">DIVYAJ P</p>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center flex-col">
            <div className="h-1/4 w-full flex flex-row border-2 border-blue-200/50">
              <div className="w-1/3 h-full flex items-center justify-start text-blue-300 font-bold bg-blue-200/10 px-4">
                Email
              </div>
              <div className="w-2/3 h-full flex items-center justify-start font-semibold px-4">
                divya@gmail.com
              </div>
            </div>
            <div className="h-1/4 w-full flex flex-row border-2 border-blue-200/50">
              <div className="w-1/3 h-full flex items-center justify-start text-blue-300 font-bold bg-blue-200/10 px-4">
                Phone
              </div>
              <div className="w-2/3 h-full flex items-center justify-start font-semibold px-4">
                9897654321
              </div>
            </div>
            <div className="h-2/4 w-full flex flex-row border-2 border-blue-200/50">
              <div className="w-1/3 h-full flex items-center justify-start text-blue-300 font-bold bg-blue-200/10 px-4">
                Address
              </div>
              <div className="w-2/3 h-full flex items-center justify-start font-semibold px-4">
                192/167, Nehru street, cbe city, Tamilnadu , India - 648 000
              </div>
            </div>
          </div>
        </div>
      </div>
      {editModel && (
        <>
          <div className="h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0">
            <div className="h-[45vh] w-[30vw] flex flex-col shadow-md shadow-blue-300/20 bg-white rounded-sm">
              <div className="h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  value="DIVYAKARTHIKAA J P"
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  value="divya@gmail.com"
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                  value="9897654321"
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
                <textarea
                  value="192/167,Nehru street, cbe city, Tamilnadu , India - 648 000"
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
              </div>
              <div className="h-1/6 w-full flex flex-row justify-center items-center">
                <button
                  className="w-1/2 h-full bg-red-500 font-bold text-white"
                  onClick={() => {
                    setEditModel(false);
                  }}
                >
                  Cancel
                </button>
                <button className="w-1/2 h-full bg-blue-500 font-bold text-white">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {editKeyModel && (
        <>
          <div className="h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0">
            <div className="h-[45vh] w-[30vw] flex flex-col shadow-md shadow-blue-300/20 bg-white rounded-sm">
              <div className="h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Old Password"
                  value=""
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="New Password"
                  value=""
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                  value=""
                  className="bg-blue-200/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm"
                />
              </div>
              <div className="h-1/6 w-full flex flex-row justify-center items-center">
                <button
                  className="w-1/2 h-full bg-red-500 font-bold text-white"
                  onClick={() => {
                    setEditKeyModel(false);
                  }}
                >
                  Cancel
                </button>
                <button className="w-1/2 h-full bg-green-500 font-bold text-white">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserSettings;
