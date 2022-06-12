import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

function EventModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);

  const { setShowEventModal, daySelected, dispatchCalEvent } =
    useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const calenderEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: Date.now(),
    };
    dispatchCalEvent({ type: "push", payload: calenderEvent });
    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid items-end gap-y-7 grid-cols-1/5">
            <div></div>
            <input
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              required
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              className="pt-3 border-0 text-gray-600   pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              required
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2 ">
              {labelsClasses.map((labelClass, i) => (
                <span
                  key={labelClass}
                  onClick={() => setSelectedLabel(labelClass)}
                  className={`bg-${labelClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === labelClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end  border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            {" "}
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;