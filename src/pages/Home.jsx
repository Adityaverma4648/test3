import { useEffect } from "react";
import axios from "axios";

// importing redux
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";

//  importing Loader
import Loader from "../components/Loader";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);

        dispatch(getUser(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-warning"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="col-md-10 container-fluid d-flex flex-md-row flex-column justify-content-start
         align-items-center bg-white rounded-5 overflow-hidden"
        style={{ height: "80vh" }}
      >
        <div className="col-md-6 container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
          <div
            className="col-lg-8 col-md-10 container-fluid d-flex justify-content-center align-items-center bg-white shadow-lg fw-semibold fs-5 rounded-4"
            style={{ height: "10%" }}
          >
            User Lists
          </div>

          <div
            className="col-lg-8 col-md-10 container-fluid d-flex flex-column justify-content-start align-items-start overflow-y-scroll my-2"
            id="userListScrollDiv"
            style={{ height: "80%" }}
          >
            {loading ? (
              <Loader />
            ) : (
              user?.map((d, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white w-100 bg-white text-dark list-unstyled d-flex justify-content-center align-items-center border-bottom"
                    style={{ minHeight: "12%", cursor : "pointer" }}
                  >
                    <div className="col-md-10 container-fluid h-100 d-flex justify-content-center align-items-center">
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "80px", width: "80px" }}
                      >
                        <img src={d.avatar}  alt={d.profile.username} className="rounded-5 bg-warning" style={{height : "60px" , width : "60px", borderRadius : "50%"}}
                        />
                      </div>

                      <div className="h-100 flex-grow-1 d-flex justify-content-start align-items-center px-2">{d.profile.firstName} { d.profile.lastName}</div>
                    </div>
                  </li>
                );
              })
            )}
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center bg-success">
           <div className="container d-flex flex-col justify-content-center align-items-center bg-info">
               <div>

               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
