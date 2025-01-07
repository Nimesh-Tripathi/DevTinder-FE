import { useState } from "react"
import UserCard from "./UserCard"
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [update, setUpdate] = useState("")
    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("");
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", { firstName, lastName, about, photoUrl, age, gender }, { withCredentials: true })
            dispatch(addUser(res?.data?.data))
            setUpdate(true);
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <>
            {update &&
                <div role="alert" className="alert alert-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your Profile has been Updated</span>
                </div>
            }

            {error &&
                <div role="alert" className="alert alert-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}.</span>
                </div>}

            <div className="flex justify-center my-10">

                <div className="flex justify-center mx-10">

                    <div className="card bg-base-300 w-96 shadow-xl">

                        <div className="card-body">

                            <h2 className="card-title justify-center">Edit Profile</h2>

                            <div>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">First Name:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Last Name:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Photo Url:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Age:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Gender:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">About:</span>
                                    </div>
                                    <input type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs text-white"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </label>

                            </div>


                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                            </div>

                        </div>

                    </div>

                </div>

                <UserCard user={{ firstName, lastName, about, photoUrl, age, gender }}></UserCard>

            </div>


        </>
    )

}

export default EditProfile