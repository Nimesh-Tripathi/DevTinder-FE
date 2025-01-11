import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFeed } from "../utils/feedSlice"
import UserCard from "./UserCard"

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed)
  // console.log(feed);

  const getFeed = async () => {
    if (feed) return;
    try {

      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true })
      // console.log(res);

      console.log(res.data)
      dispatch(setFeed(res?.data))

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getFeed();
  }, [])

  if (!feed) return;

  if (feed.length <= 0) return <h1 className="flex justify-center my-10">No new users founds!</h1>;


  return feed && (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]}></UserCard>
    </div>
  )
}

export default Feed