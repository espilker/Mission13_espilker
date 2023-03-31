// import styles from ".blah.module.css"
//above is how you can import an external css file

//usually we use props instead of yadda
function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" width="200" />
        </div>
        <div className="col align-self-center text-start">
          <h1>This is the Joel Hilton Movie Collection:</h1>
          <p>
            Here you can find a database of movies, as well as a link to his
            podcast.
          </p>
        </div>
      </div>
    </>
  );
}

function Nav() {
  return (
    <>
      <div>
        <a href="https://baconsale.com/">Visit Joel's Podcast!</a>
      </div>
    </>
  );
}

//lets you import this file into the main app
export default TopBanner;
