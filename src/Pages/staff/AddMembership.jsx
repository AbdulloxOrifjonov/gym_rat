/** @format */

import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { Select } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";

function AddMembership() {
  const navigate = useNavigate();


  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  //   const [m, setM] = useState(false);
  //   const [t, setT] = useState(false);
  //   const [w, setW] = useState(false);
  //   const [tt, setTT] = useState(false);
  //   const [f, setF] = useState(false);
  //   const [s, setS] = useState(false);
  //   const [ss, setSS] = useState(false);

  const [limit, setLimit] = useState(true);

  return (
    <div>
      <Tabs aria-label="Default tabs" variant="default">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="flex w-full items-center justify-center flex-col">
            <div className="w-[800px] rounded-t-xl bg-blue-800 flex items-center justify-center h-14">
              <h2 className="text-white font-semibold text-lg">Add Membership Option</h2>
            </div>
            <div className="w-[800px] bg-gray-200 p-7">
              <form className="flex items-start flex-col justify-center w-full gap-4">
                <div className="flex items-start justify-center w-full gap-4">
                  <div className="w-[426px]">
                    <div className="w-full">
                      <h2 className="text-lg font-bold">Limit:</h2>
                      <div className="flex items-center justify-start gap-[10px] w-[340px] flex-col">
                        <div className="flex items-center justify-start gap-[10px] w-full">
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="1"
                          >
                            M
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="2"
                          >
                            T
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="3"
                          >
                            W
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="4"
                          >
                            T
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="5"
                          >
                            F
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="6"
                          >
                            S
                          </label>
                          <label
                            className="w-[40px] h-[40px] rounded-full bg-slate-700 flex items-center justify-center text-white"
                            htmlFor="7"
                          >
                            S
                          </label>
                        </div>
                        <div className="flex items-start justify-center gap-[35px] w-[340px]">
                          <input className="" type="checkbox" id="1" name="" />
                          <input className="" type="checkbox" id="2" name="" />
                          <input className="" type="checkbox" id="3" name="" />
                          <input className="" type="checkbox" id="4" name="" />
                          <input className="" type="checkbox" id="5" name="" />
                          <input className="" type="checkbox" id="6" name="" />
                          <input className="" type="checkbox" id="7" name="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-start flex-col w-[300px] pt-[30px]">
                    <div className="flex gap-[5px] items-start justify-start w-[300px]">
                      <div className="w-[97px]">
                        <Select id="limit" required onChange={(e) => setLimit(!limit)}>
                          <option>Limited</option>
                          <option>Un Limited</option>
                        </Select>
                      </div>
                      <div className="w-[190px]">
                        {limit === true ? (
                          <input type="text" className="w-[190px]" placeholder="Enter a limit" />
                        ) : (
                          <h2>un limited</h2>
                        )}
                      </div>
                    </div>
                    <div>
                      <TextInput id="search" type="text" placeholder="Enter a payment" required />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h2>FROM</h2>
                    <Datepicker
                      weekStart={1} // Monday
                    />
                  </div>
                  <div>
                    <h2>TO</h2>
                    <Datepicker
                      weekStart={1} // Monday
                    />
                  </div>
                  <div className="w-[300px]">
                    <h2>STARTING DATE</h2>
                    <Datepicker
                      weekStart={1} // Monday
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="card w-[200px] flex justify-center items-center">
                    <AutoComplete
                      value={value}
                      suggestions={items}
                      completeMethod={search}
                      onChange={(e) => setValue(e.value)}
                      className="z-50 bg-white"
                    />
                  </div>
                  <button type="submit" className="w-28 h-11 rounded-xl text-white bg-blue-700">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Tabs.Item>
        {/* <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item> */}
      </Tabs>
    </div>
  );
}

export default AddMembership;
