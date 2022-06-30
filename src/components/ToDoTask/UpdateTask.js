import React from "react";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    backgroundColor: "#f3f4f6",
  },
};

Modal.setAppElement("#root");


export default function UpdateModal({ id, setIsReload, isReload }) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  const handleUpdate = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const textData = event.target.textData.value;

    // console.log(title, textData);
    fetch(`http://localhost:5000/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, textData }),
    })
      .then((res) => res.json())
      .then((data) => setIsReload(!isReload));
  };

  return (
    <div>
      <button onClick={openModal}>
        <FontAwesomeIcon className='text-right text-xl ml-2' icon={faEdit}></FontAwesomeIcon>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal} className="btn btn-sm btn-warning">
          close
        </button>
        <div>Please update your Task!</div>
        <div className=" mt-3 bg-secondary">
          <form className="container " onSubmit={handleUpdate}>
            <div className="input-group mb-3 mt-5 ">
              <input
                type="text"
                className="form-control border p-3 rounded-xl"
                required
                placeholder="Add a Task"
                aria-label="With input"
                name="title">
              </input>
            </div>

            <div className="input-group ">
              <input
                className="form-control border p-3 rounded-xl"
                aria-label="With textarea"
                placeholder="Update your plan.."
                name="textData"
                required
              ></input>
            </div>
            <div className="mt-4">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}