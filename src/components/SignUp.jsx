import axios from "axios";
import { useState } from "react"
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [firstName, setFirstName] = useState("Virta");
    const [lastName, setLastName] = useState("kohli");
    const [emailId, setEmailId] = useState("virat@gmail.com");
    const [password, setPassword] = useState("Nimesh@10");
    // const [photoUrl, setPhotoUrl] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error,setError] = useState("");

    const HandleSignUp = async() => {
        try {
            const res = await axios.post(BASE_URL + "/signUp", { firstName, lastName, emailId, password }, { withCredentials: true })

            // console.log(res.data.data);
            
            dispatch(addUser(res.data.data))
            navigate("/profile")
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
            console.error(err);
        }
    }

    return (
        <div className="flex justify-center my-10">

            <div className="card bg-base-300 w-96 shadow-xl">

                <div className="card-body">

                    <h2 className="card-title justify-center">SignUp</h2>

                    <div>

                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">FIRST NAME</span>
                            </div>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>

                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">LAST NAME</span>
                            </div>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>

                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">EMAIL ID</span>
                            </div>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </label>

                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">PASSWORD</span>
                            </div>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                    </div>

                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={() => HandleSignUp()}>Sign UP</button>
                    </div>
                    <br></br>
                    <p>If You Are Existing User?   <Link className="text-green-500" to="/login">Please Sign In</Link></p>

                </div>

            </div>

        </div>
    )
}

export default SignUp