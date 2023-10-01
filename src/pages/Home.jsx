/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import axios from "axios";

// importing redux
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUser } from "../redux/userSlice";

//  imoporting default image
import defaultAvatar from "../images/download 1.png";

//  importing Loader
import Loader from "../components/Loader";
import { useState } from "react";
import ListCard from "../components/ListCard";

const Home = () => {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const { loading, user, singleUser } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        dispatch(getUser(res.data));
        dispatch(getSingleUser(res.data[0]));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-warning page"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="col-md-10 container-fluid d-flex flex-md-row flex-column-reverse justify-content-md-start justify-content-center align-items-center bg-white overflow-hidden h-80 h-99">
        <div
          className="col-md-5 container-fluid h-100 d-flex flex-column justify-content-center align-items-center"
          id="lists"
        >
          <div
            className="col-lg-10 container-fluid d-flex justify-content-center align-items-center  fw-bold fs-5 rounded-4 text-white bg-warning"
            style={{ height: "10%" }}
          >
            User Lists
          </div>

          <div
            className="col-lg-10 col-md-10 container-fluid my-2 d-flex justify-content-center align-items-center"
            style={{ height: "75%" }}
          >
            <div
              className="w-100 h-100 d-flex flex-column justify-content-md-start align-items-start overflow-y-scroll"
              id="userListScrollDiv"
            >
              {loading ? (
                <Loader />
              ) : (
                user?.map((d, index) => {
                  return (
                    <ListCard
                      key={index}
                      id={d.id}
                      index={d.index}
                      createdAt={d.createdAt}
                      avatar={d.avatar}
                      Bio={d.Bio}
                      jobTitle={d.jobTitle}
                      profile={d.profile}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="col-md-7 container-fluid h-100 d-flex justify-content-center align-items-center ">
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
            <div
              className="col-lg-10 container-fluid d-flex justify-content-center align-items-center bg-light fw-bold fs-5 rounded-4 text-warning border border-warning"
              style={{ height: "10%" }}
            >
              User Details
            </div>

            <div className="col-lg-10 col-md-12 container-fluid d-flex flex-column justify-content-center align-items-center my-2 singleUser">
              <div className="container-md container-fluid h-100 d-flex justify-content-center align-items-center ">
                {loading ? (
                  <Loader />
                ) : (
                  <div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
                    <div className="w-100 d-flex justify-content-center align-items-center position-relative">
                      <img
                        src={singleUser.avatar}
                        className="singleUserProfile z-1 "
                        onError={(e) => {
                          if (e.type === "error") {
                            setImageError(true);
                            e.target.src = defaultAvatar;
                          }
                        }}
                        alt={singleUser.profile.username}
                      />
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-center text-warning fw-bold">
                      @{singleUser.profile.username}
                    </div>

                    <div
                      className="col-md-12 container-fluid d-flex justify-content-center align-items-center  position-relative"
                      style={{ height: "20%" }}
                    >
                      <div
                        className="w-100 h-75 rounded-3 position-relative border border-warning bg-light d-flex justify-content-center align-items-center text-warning fw-semibold"
                        
                      >
                        {singleUser.Bio}
                      </div>
                      <div
                        className="text-warning bg-light px-2 position-absolute z-1 top-0 start-0 ms-3 mb-3"
                        style={{ fontSize: "14px", marginBottom: "55px" }}
                      >
                        Bio
                      </div>
                    </div>

                    <div className="col-md-12 container-fluid d-flex justify-content-center align-items-center  position-relative my-2 detailDiv">
                      <div
                        className="w-100 rounded-3 position-relative border border-warning bg-light d-flex justify-content-center align-items-center text-warning fw-semibold"
                        style={{ height: "90%" }}
                      >
                        {singleUser.profile.firstName}
                        <span className="mx-1">
                          {singleUser.profile.lastName}
                        </span>
                      </div>
                      <div
                        className="text-warning bg-light px-2 position-absolute z-1 top-0 start-0 ms-3 mb-3 "
                        style={{ fontSize: "14px", marginBottom: "55px" }}
                      >
                        Fullname
                      </div>
                    </div>

                    <div className="col-md-12 container-fluid d-flex justify-content-center align-items-center  position-relative my-2 detailDiv">
                      <div
                        className="w-100 rounded-3 position-relative border border-warning bg-light d-flex justify-content-center align-items-center text-warning fw-semibold"
                        style={{ height: "90%" }}
                      >
                        {singleUser.jobTitle}
                      </div>
                      <div
                        className="text-warning bg-light px-2 position-absolute z-1 top-0 start-0 ms-3 mb-3"
                        style={{ fontSize: "14px", marginBottom: "55px" }}
                      >
                        JobTitle
                      </div>
                    </div>

                    <div className="col-md-12 container-fluid d-flex justify-content-center align-items-center  position-relative my-2 detailDiv">
                      <div
                        className="w-100 rounded-3 position-relative border border-warning bg-light d-flex justify-content-center align-items-center text-warning fw-semibold"
                        style={{ height: "90%" }}
                      >
                        {singleUser.profile.firstName}
                        <span className="mx-1">{singleUser.profile.email}</span>
                      </div>
                      <div
                        className="text-warning bg-light px-2 position-absolute z-1 top-0 start-0 ms-3 mb-3"
                        style={{ fontSize: "14px", marginBottom: "55px" }}
                      >
                        Email
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
