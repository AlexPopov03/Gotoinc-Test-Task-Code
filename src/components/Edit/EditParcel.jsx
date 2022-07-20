import { Parcel } from '../../App/context'
import {useContext} from "react";
import AddParcel from "../Add/AddParcel";
const EditParcel = () => {
  const [parcel, setParcel] = useContext(Parcel)

  return (
    <div className={`modal fade ${parcel.id ? 'show' : ''}`} style={{display: parcel.id ? 'block' : '' }} id="editParcel" tabIndex="-1"  aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >
              Edit Parcel
            </h5>
            <button type="button" className="btn-close" onClick={() => setParcel({})} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <AddParcel type='edit' />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setParcel({})} data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditParcel