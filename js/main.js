// ? ==============> Dark Mode
document.getElementById("toggle").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("html").classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("html").classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
  document.getElementById("toggle").checked = true;
} else {
  document.querySelector("html").classList.remove("dark");
  document.getElementById("toggle").checked = false;
}

// ? ==============> Share posts
// &================> Dom element
const postText = document.getElementById("postText"),
  postButton = document.getElementById("postButton");
// ! =============>  Local Storage and Update Flags
if (localStorage.getItem("posts") !== null) {
  postsContainer = JSON.parse(localStorage.getItem("posts"));
  displayPosts();
} else {
  postsContainer = [];
}
// ~ =============> Functions ===============>
// Add Post Function
postButton.addEventListener("click", function() {
    if (postText.value != '') {
      var post = postText.value;
      postsContainer.push(post);
      localStorage.setItem("posts", JSON.stringify(postsContainer));
      clearPosts();
      displayPosts();
    } else {
      alert("Write any thing in the post")
    }
  });

// clear textArea
  function clearPosts() {
    postText.value = "";
  }

//  display tweet
function displayPosts() {
    let cartona = ''
    for (let i = 0; i < postsContainer.length; i++) {
        cartona +=`
                        <div class="pb-4 border border-gray-200 cursor-pointer dark:border-dim-200">
                    <div class="flex p-4 pb-0">
                        <img class="rounded-full h-9 w-9" src="images/rapunzel.jpeg" alt="profile photo">
                        <p class="flex items-center flex-shrink-0 ml-2 font-medium text-gray-800 dark:text-white">
                            Basma
                            <span class="ml-1 text-sm leading-5 text-gray-500">@BaSma972 . July 10</span>
                        </p>
                    </div>
                    <div class="pl-8 pr-4 xl:pl-16">
                            <p class="w-auto font-medium text-gray-800 dark:text-white">${postsContainer[i]}</p>
                            <a href="" class="text-dim-50">#ASPNET</a>
                            <div class="border-x-0 tweets py-1">
                                <ul class="flex items-center justify-between w-full py-1 md:gap-5 md:justify-normal ">
                                    <li class="post-icon">
                                        <span class="mr-1 font-sm">12.5k</span>
                                        <p class="text-gray-400 caption-top font-sm">retweets</p>
                                    </li>
                                    <li class="post-icon">
                                        <span class="mr-1 font-sm">45k</span>
                                        <p class="text-gray-400 caption-top font-sm">quotes</p>
                                    </li>
                                    <li class="post-icon">
                                        <span class="mr-1 font-sm">90k</span>
                                        <p class="text-gray-400 caption-top font-sm">likes</p>
                                    </li>
                                </ul>
                            </div>
                            <ul class="flex items-center justify-between w-full pt-3 ps-3 md:gap-24 md:justify-normal">
                                <li class="post-icon hover:text-blue-400 dark:hover:text-blue-400">
                                    <svg class="mr-2 text-lg" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment-1</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -255.000000)" fill="currentColor"> <path d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z" id="comment-1" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>                            
                                </li>
                                <li class="post-icon hover:text-green-400 dark:hover:text-green-400">
                                    <svg class="mr-2 text-lg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7.343C10.4142 7.343 10.75 7.00721 10.75 6.593C10.75 6.17879 10.4142 5.843 10 5.843V7.343ZM9.808 6.593L9.79453 7.343H9.808V6.593ZM5 11.227L4.25013 11.2128C4.25004 11.2176 4.25 11.2223 4.25 11.227H5ZM5 12.772L4.24987 12.772L4.25013 12.786L5 12.772ZM9.808 17.407V16.6569L9.79453 16.6571L9.808 17.407ZM11.988 18.157C12.4022 18.157 12.738 17.8212 12.738 17.407C12.738 16.9928 12.4022 16.657 11.988 16.657V18.157ZM10.8752 15.2787C10.5784 14.9897 10.1036 14.996 9.81465 15.2928C9.52569 15.5896 9.53201 16.0644 9.82878 16.3533L10.8752 15.2787ZM11.4638 17.9453C11.7606 18.2343 12.2354 18.228 12.5243 17.9312C12.8133 17.6344 12.807 17.1596 12.5102 16.8707L11.4638 17.9453ZM12.5102 17.9453C12.807 17.6564 12.8133 17.1816 12.5243 16.8848C12.2354 16.588 11.7606 16.5817 11.4638 16.8707L12.5102 17.9453ZM9.82878 18.4627C9.53201 18.7516 9.52569 19.2264 9.81465 19.5232C10.1036 19.82 10.5784 19.8263 10.8752 19.5373L9.82878 18.4627ZM14 16.657C13.5858 16.657 13.25 16.9928 13.25 17.407C13.25 17.8212 13.5858 18.157 14 18.157V16.657ZM14.192 17.407L14.2055 16.657H14.192V17.407ZM19 12.773L19.7499 12.7872C19.75 12.7824 19.75 12.7777 19.75 12.773H19ZM19 11.228H19.7501L19.7499 11.214L19 11.228ZM14.192 6.593V7.34312L14.2055 7.34288L14.192 6.593ZM12.013 5.843C11.5988 5.843 11.263 6.17879 11.263 6.593C11.263 7.00721 11.5988 7.343 12.013 7.343V5.843ZM13.1248 8.72135C13.4216 9.01031 13.8964 9.00399 14.1853 8.70722C14.4743 8.41045 14.468 7.93562 14.1712 7.64665L13.1248 8.72135ZM12.5362 6.05465C12.2394 5.76569 11.7646 5.77201 11.4757 6.06878C11.1867 6.36555 11.193 6.84038 11.4898 7.12935L12.5362 6.05465ZM11.4898 6.05465C11.193 6.34362 11.1867 6.81845 11.4757 7.11522C11.7646 7.41199 12.2394 7.41831 12.5362 7.12935L11.4898 6.05465ZM14.1712 5.53735C14.468 5.24838 14.4743 4.77355 14.1853 4.47678C13.8964 4.18001 13.4216 4.17369 13.1248 4.46265L14.1712 5.53735ZM10 5.843H9.808V7.343H10V5.843ZM9.82147 5.84312C6.80074 5.78886 4.30721 8.19215 4.25013 11.2128L5.74987 11.2412C5.7913 9.04822 7.60155 7.30349 9.79453 7.34288L9.82147 5.84312ZM4.25 11.227V12.772H5.75V11.227H4.25ZM4.25013 12.786C4.30657 15.8071 6.80029 18.2111 9.82147 18.1569L9.79453 16.6571C7.60123 16.6965 5.79084 14.9513 5.74987 12.758L4.25013 12.786ZM9.808 18.157H11.988V16.657H9.808V18.157ZM9.82878 16.3533L11.4638 17.9453L12.5102 16.8707L10.8752 15.2787L9.82878 16.3533ZM11.4638 16.8707L9.82878 18.4627L10.8752 19.5373L12.5102 17.9453L11.4638 16.8707ZM14 18.157H14.192V16.657H14V18.157ZM14.1785 18.1569C17.1993 18.2111 19.6928 15.8078 19.7499 12.7872L18.2501 12.7588C18.2087 14.9518 16.3985 16.6965 14.2055 16.6571L14.1785 18.1569ZM19.75 12.773V11.228H18.25V12.773H19.75ZM19.7499 11.214C19.6934 8.19286 17.1997 5.78886 14.1785 5.84312L14.2055 7.34288C16.3988 7.30349 18.2092 9.04873 18.2501 11.242L19.7499 11.214ZM14.192 5.843H12.013V7.343H14.192V5.843ZM14.1712 7.64665L12.5362 6.05465L11.4898 7.12935L13.1248 8.72135L14.1712 7.64665ZM12.5362 7.12935L14.1712 5.53735L13.1248 4.46265L11.4898 6.05465L12.5362 7.12935Z" fill="currentColor"></path> </g></svg>
                                </li>
                                <li class="post-icon hover:text-red-600 dark:hover:text-red-600">
                                    <svg class="mr-2 text-lg" fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"></path></g></svg>
                                </li>
                                <li class="post-icon hover:text-blue-400 dark:hover:text-blue-400">
                                    <svg class="mr-2 text-lg font-extrabold" fill="currentColor" width="20px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Export"> <g> <path d="M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"></path> <path d="M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z"></path> </g> </g> </g></svg>
                                </li>
                            </ul>
                    </div>
                 </div>
        `
        
    }
    document.getElementById("posts").innerHTML = cartona;
}
