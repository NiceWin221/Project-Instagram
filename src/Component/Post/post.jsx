import Posting from './posting'
import profile from './images/profile.jpg'
import profilePost from './images/profile-post.jpg'
import profile2 from './images/profile2.jpg'
import profile2Post from './images/profile2-post.jpg'
import profile3 from './images/profile3.jpg'
import profile3Post from './images/profile3-post.jpg'

export default function Post(
  { savedPosts,
    setSavedPosts,
    bookmark,
    setBookmark
  }) {
  return (
    <div className="post-container">
      <Posting
        profileImg={profile3}
        username="museid.acg"
        postImg={profile3Post}
        postTime="3 day"
        likes={7809}
        caption="Film anime Haikyuu!! The Movie: Decivise Battle at the Garbage Dump merilis visual terbaru!..."
        commentar='584'
        savedPosts={savedPosts} setSavedPosts={setSavedPosts}
        bookmark={bookmark[0]}
        setBookmark={() => {
          setBookmark((prev) => {
            const newState = [...prev];
            newState[0] = !newState[0];
            return newState;
          });
        }}
      />
      <Posting
        profileImg={profile2}
        username="mpl.id.official"
        postImg={profile2Post}
        postTime="1 hour"
        likes={42099}
        caption="ONIC menjadi sosok menyeramkan pada M5 World Championship kali ini. ..."
        commentar='8321'
        savedPosts={savedPosts} setSavedPosts={setSavedPosts}
        bookmark={bookmark[1]}
        setBookmark={() => {
          setBookmark((prev) => {
            const newState = [...prev];
            newState[1] = !newState[1];
            return newState;
          });
        }}
      />
      <Posting
        profileImg={profile}
        username="shahihfiqih"
        postImg={profilePost}
        postTime="1 day"
        likes={2206}
        caption="Diantara doa untuk meruqyah diri sendiri..."
        commentar='243'
        savedPosts={savedPosts} setSavedPosts={setSavedPosts}
        bookmark={bookmark[2]}
        setBookmark={() => {
          setBookmark((prev) => {
            const newState = [...prev];
            newState[2] = !newState[2];
            return newState;
          });
        }}
      />
    </div>
  )
}