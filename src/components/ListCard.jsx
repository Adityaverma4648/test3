/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

//  importing default avatar
import defaultAvatar from "../images/download 1.png";

//  importing redux 
import { getSingleUser } from '../redux/userSlice';

const ListCard = (props) => {
    
    const dispatch = useDispatch();
    const [imageError, setImageError] = useState(false);
    const {loading , singleUser} = useSelector((state)=>state.user);
    const [selected, setSelected] = useState(false);

  return (
                <li
                      className={`container-fluid shadow-sm list-unstyled d-flex justify-content-center align-items-center border-bottom list ${props.id === singleUser.id && props.profile.username === singleUser.profile.username ? "bg-warning text-white" : "bg-light text-warning"}`}
                      onClick={() => {
                        dispatch(getSingleUser(props));
                      }}
                    >
                      <div className="col-md-10 container-fluid h-100 d-flex justify-content-center align-items-center">
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img
                            src={props.avatar}
                            alt={props.profile.username}
                            className="rounded-5 bg-warning"
                            onError={(e) => {
                              if (e.type === "error") {
                                setImageError(true);
                                e.target.src = defaultAvatar;
                              }
                            }}
                            style={{
                              height: "60px",
                              width: "60px",
                              borderRadius: "50%",
                            }}
                          />
                        </div>

                        <div className="h-100 flex-grow-1 d-flex justify-content-start align-items-center px-2 fw-semibold">
                          {props.profile.firstName} {props.profile.lastName}
                        </div>
                      </div>
                    </li>
  )
}

export default ListCard