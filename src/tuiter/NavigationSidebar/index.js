import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
            <div className="pe-0 list-group">
                <a className="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i className="fa-brands fa-twitter"></i></a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house-chimney me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag me-2 "></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bell me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bookmark me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa-solid fa-list me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 
                    ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa-solid fa-user me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span>
                </a>
                <a className={`wd-left-nav-item list-group-item pt-1 pb-1 rounded-bottom 
                    ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa-solid fa-comment-dots me-2"></i>
                    <span
                        className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</span>
                </a>
                <button className="btn btn-primary mt-2 rounded-pill w-100" type="button">Tweet
                </button>
            </div>
    );
};
export default NavigationSidebar;