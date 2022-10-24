/* eslint-env jquery */

const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item pt-1 ps-3 pb-0 pe-0">
            <img class="float-end ms-2 me-2 mt-3" src=${post.image} alt="postImage.png">
            <p class="mt-0 mb-0">${post.topic}</p>
            <p class="mb-0">
                <span class="fw-bold text-white">${post.userName} 
                    <i class="fa-solid fa-circle-check fa-xs"></i> </span>  - ${post.time}
            </p>
            <p class="fw-bold text-white mb-2">${post.title}</p>
        </li>
    `);
}
export default PostSummaryItem;