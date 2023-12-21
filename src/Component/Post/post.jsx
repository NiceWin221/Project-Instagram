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
    savedPosts1,
    setSavedPosts1,
    savedPosts2,
    setSavedPosts2,
    savedPosts3,
    setSavedPosts3
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
        commentar='243'
        savedPosts={savedPosts} setSavedPosts={setSavedPosts}
        bookmark={savedPosts1}
        setBookmark={setSavedPosts1}
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
        bookmark={savedPosts2}
        setBookmark={setSavedPosts2}
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
        bookmark={savedPosts3}
        setBookmark={setSavedPosts3}
      />
    </div>
  )
}