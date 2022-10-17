/* eslint-env jquery */

const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item wd-wtf">
            <img class="float-start rounded-circle me-2" src=${who.avatarIcon} alt="avatarIcon.png">
            <button class="btn btn-primary float-end mt-2 rounded-pill" type="button">Follow</button>
            <p class="fw-bold text-white m-0">${who.userName} <i class="fa-solid fa-circle-check fa-xs"></i></p>
            <p class="mb-0">@${who.handle}</p>
       </li>
    `);
}
export default WhoToFollowListItem;
