/* eslint-env jquery */

// function NavigationSidebar() {
//     $('#wd-sidebar').append(`
//     <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 pe-0">
//             <ul class="list-group">
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-brands fa-twitter"></i></li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-house-chimney me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</span>
//                 </li>
//                 <li class="wd-left-nav-item list-group-item active pt-1 pb-1">
//                     <i class="fa-solid fa-hashtag me-1 "></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore</span>
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-bell me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</span>
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-envelope me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span>
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-bookmark me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span>
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-list me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span>
//
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1">
//                     <i class="fa-solid fa-user me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span>
//
//                 </li>
//                 <li class="wd-left-nav-item list-group-item pt-1 pb-1 rounded-bottom">
//                     <i class="fa-solid fa-comment-dots me-1"></i>
//                     <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</span>
//                 </li>
//                 <button class="btn btn-primary mt-2 rounded-pill w-100" type="button">Tweet</button>
//             </ul>
//     </div>
//     `);
// }
// $(NavigationSidebar);



const NavigationSidebar = () => {
    return(`
    <div class="pe-0">
            <ul class="list-group">
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-brands fa-twitter"></i></li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-house-chimney me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</span>
                </li>
                <li class="wd-left-nav-item list-group-item active pt-1 pb-1">
                    <i class="fa-solid fa-hashtag me-1 "></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore</span>
                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-bell me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</span>
                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-envelope me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span>
                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-bookmark me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span>
                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-list me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span>

                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1">
                    <i class="fa-solid fa-user me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span>

                </li>
                <li class="wd-left-nav-item list-group-item pt-1 pb-1 rounded-bottom">
                    <i class="fa-solid fa-comment-dots me-1"></i>
                    <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</span>
                </li>
                <button class="btn btn-primary mt-2 rounded-pill w-100" type="button">Tweet</button>
            </ul>
    </div>
    `);
}
export default NavigationSidebar;
