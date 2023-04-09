function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="../static/SportsVerse (1).jpg" alt="sportsverse">
                </a>

                <ul id="nav_options">
                    <li><a href="venues.html"><span class="link-btn">Book Venues</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">Activites</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">Blog</span></a></li>
                    <li><a href="profile.html"><span class="link-btn">Profile</span></a></li>
                    <li><a href="http://localhost:3000"><span class="link-btn">Grounds Time</span></a></li>
                </ul>
            </div>`;
}

export default navbar;