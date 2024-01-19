# Title

    INSTA SHARE (INSTAGRAM CLONE)

## Objective

To build a Insta Share App by applying the concepts learned till React Course at <a href='https://www.ccbp.in/' target='_blank'>CCBP 4.0 Intensive</a>.

## Tech Stack

    HTML5, CSS3, ReactJs, React Router, Git , Github for hosting the repository

## Completion Instructions

### Functionality

#### Must Have

    Fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

<details>
<summary>Click to View Routes</summary>

- **Login Route**

  - When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response should be displayed
  - When a valid username and password are provided and the Login button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the Login Route
  - When an _authenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user opens the Home Route

    - An HTTP GET request should be made to **User Stories API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **User Stories API URL**

    - An HTTP GET request should be made to the **Posts API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Posts API URL**

    - Initially for every Post **BsHeart**, **FaRegComment**, **BiShareAlt** from `react-icons` should be displayed
    - When the **username** in the particular post is clicked, then the page should be navigated to the User Details Route

    - When the **Like** icon (FcLike) is clicked,

      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `true`
      - It should change to **Unlike** icon (BsHeart)
      - Likes count of that particular post should be incremented by one

    - When the **Unlike** icon is clicked,

      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `false`
      - It should change to **Like** icon
      - Likes count of that particular post should be decremented by one

    - **Header**

      - When the Website logo is clicked, then the page should be navigated to the Home Route
      - When the **Home** link in the Header is clicked, then the page should be navigated to the Home Route
      - When the **Profile** link in the Header is clicked, then the page should be navigated to the My Profile Route
      - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- **User Profile Route**

  - When an _authenticated_ user opens the User Profile Route

    - An HTTP GET request should be made to the **User Profile API URL** with `jwt_token` in the Cookies and `user_id` as a path parameter

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **User Profile API URL**

    - The list of posts section should contain the **BsGrid3X3** from `react-icons`
    - If the list of posts are empty, then the No Posts View in the **Figma** screens should be displayed
    - If the list of posts are empty, then the **BiCamera** from `react-icons` should be displayed
    - All the header functionalities mentioned in the Home Route should work in this route accordingly

- **My Profile Route**

  - When an _authenticated_ user opens the My Profile Route

    - An HTTP GET request should be made to the **My Profile API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **My Profile API URL**

    - The list of posts section should contain the **BsGrid3X3** from `react-icons`

- **Search Functionality**

  - When an _authenticated_ user search posts using **post caption** by clicking on the Search icon (`FaSearch` from `react-icons`)

    - An HTTP GET request should be made to the **Search Posts API URL** with `jwt_token` in the Cookies and search post as a query parameter

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Search Posts API URL**

    - If the search posts are empty, then the Search Not Found View in the **Figma** screens should be displayed
    - Initially for every Post **BsHeart**, **FaRegComment**, **BiShareAlt** from `react-icons` should be displayed
    - When the **username** in the particular post is clicked, then the page should be navigated to the User Details Route
    - When the **Like** icon is clicked,
      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `true`
      - It should change to **Unlike** icon
      - Likes count of that particular post should be incremented by one
    - When the **Unlike** icon is clicked,
      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `false`
      - It should change to **Like** icon
      - Likes count of that particular post should be decremented by one

- **Not Found Route**

  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route

- Users should be able to view the website responsively in mobile view, tablet view as well

</details>

#### Nice to Have

    NA

### Guidelines to develop a project

#### Must Have

- This is an individual assessment. All work must be your own.
- Use media queries for responsiveness. Instead of rendering the same elements twice for responsiveness.
- You have to use normal HTML elements to style the React Components. Usage of styled-components (CSS in JS) to style React components are not supported.
- Don't use any third-party packages other than packages provided and mentioned in the Quick Tips (react-slick).

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - Refer to the below Example for the usage of `testid` in the HTML elements.

    - Example: `<div testid="postItem" className="post-item"/>`.

- **Routes**

  - Render `Login` Route component when the path in URL matches `/login`
  - Render `Home` Route component when the path in URL matches `/`
  - Render `MyProfile` Route component when the path in URL matches `/my-profile`
  - Render `UserProfile` Route component when the path in URL matches `/users/:id`
    - **Note:-** use the specific user id in place of id

- Wrap the `Loader` component with an HTML container element and add the `testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" testid="loader">
    <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
  </div>
  ```

- Wrap the Clickable `react-icons` components with an HTML button element and add the `testid` attribute values accordingly

  ```jsx
  <button type="button" testid="searchIcon">
    <FaSearch />
  </button>
  ```

- The Failure View image should consist of alt attribute value as `failure view`

- **Login Route**

  - The Landing image should consist of alt attribute value as `website login`
  - The Insta Share image should consist of alt attribute value as `website logo`
  - The Cookies should be set by using the key name `jwt_token`

- **Home Route**

  - User Stories List
    - User Stories List images should consist of alt attribute value as `user story`
  - Posts List
    - The Post User Profile image should consist of alt attribute value as `post author profile`
    - The Post image should consist of alt attribute value as `post`
    - The HTML button element with Like icon (`BsHeart` from `react-icons`) should contain the `testid` attribute value as `likeIcon`
    - The HTML button element with Dis Like icon (`FcLike` from `react-icons`) should contain the `testid` attribute value as `unLikeIcon`

- **User Profile Route**

  - The Profile image should consist of alt attribute value as `user profile`
  - Story images should consist of alt attribute value as `user story`
  - Post images should consist of alt attribute value as `user post`

- **My Profile Route**

  - The Profile image should consist of alt attribute value as `my profile`
  - Story images should consist of alt attribute value as `my story`
  - Post images should consist of alt attribute value as `my post`

- **Search Functionality**

  - When Search Results are not empty
    - The Author Profile image in the post should consist of alt attribute value as `post author profile`
    - The Post image should consist of alt attribute value as `post`
    - The HTML button element with Like icon (`BsHeart` from `react-icons`) should contain the `testid` attribute value as `likeIcon`
    - The HTML button element with Dis Like icon (`FcLike` from `react-icons`) should contain the `testid` attribute value as `unLikeIcon`
  - When Search Results are Empty
    - Search Results Not Found image should consist of alt attribute value as `search not found`

- **Not Found Route**

  - The page not found image should consist of alt attribute value as `page not found`

- **Header**

  - The Insta Share image should consist of alt attribute value as `website logo`
  - The HTML button element with Search icon (`FaSearch` from `react-icons`) should contain the `testid` attribute value as `searchIcon`

</details>

#### Nice to Have

    NA

### Submission Instructions

#### Must Have

    Submit the question after solving it through given instructions

#### Nice to Have

    Publish your code after solving it

## Technical details

### Routes

| Page           | Route         | Path            |
| -------------- | ------------- | --------------- |
| Login          | Login         | /login          |
| Home           | Home          | /               |
| My Profile     | MyProfile     | /my-profile     |
| User profile   | UserProfile   | /users/:id      |
| Search Results | SearchResults | /search-results |
| Not Found      | NotFound      | /not-found      |

### Routes and Components

**Login**

| Component  | Details                                                  | State                                    | API       |
| ---------- | -------------------------------------------------------- | ---------------------------------------- | --------- |
| Login Form | Logo, "username" input, "password" input, "Login" button | apiStatus, username, password, errorMsg, | Login API |

**Home**

| Component         | Details                                                                   | State                        | API              |
| ----------------- | ------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| Header            | Logo, Links for Pages (Home, Search(only for small devices), My Profile), | searchInput, resultPostsData | Search Posts API |
|                   | "Logout" button, "Search" input(only for medium devices and above)        |                              |                  |
| User Stories List | react-slick to display stories                                            | apiStatus, storiesData       | User Stories API |
| Post Item         | Post User Profile image, Post User Profile name, Post image ,             | apiStatus, postsData         | Posts API        |
|                   | buttons (Like, Comment, Share) ,likes count, title, comments, time        | isPostLiked                  | Post Like API    |
| Loader            |                                                                           | -                            | -                |
| Failure view      | illustration, message, "Retry" button                                     | -                            | -                |

**My Profile**

| Component        | Details                                                                   | State                        | API              |
| ---------------- | ------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| Header           | Logo, Links for Pages (Home, Search(only for small devices), My Profile), | searchInput, resultPostsData | Search Posts API |
|                  | "Logout" button, "Search" input(only for medium devices and above)        |                              |                  |
| MyProfile        | consists components (Profile overview, Profile stories, Profile posts)    | apiStatus, profileOverView   | My Profile API   |
|                  |                                                                           | ProfileStories, ProfilePosts |                  |
| Profile overview | Profile image, user name, posts count, followers count, following count,  | -                            | -                |
|                  | user id, user bio                                                         |                              |                  |
| Profile stories  | story images list                                                         | -                            | -                |
| Profile posts    | post images list                                                          | -                            | -                |
| Loader           |                                                                           | -                            | -                |
| Failure view     | illustration, message, "Retry" button                                     | -                            | -                |

**User Profile**

| Component        | Details                                                                   | State                        | API              |
| ---------------- | ------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| Header           | Logo, Links for Pages (Home, Search(only for small devices), My Profile), | searchInput, resultPostsData | Search Posts API |
|                  | "Logout" button, "Search" input(only for medium devices and above)        |                              |                  |
| UserProfile      | consists components (Profile overview, Profile stories, Profile posts)    | apiStatus, profileOverView   | My Profile API   |
|                  |                                                                           | ProfileStories, ProfilePosts |                  |
| Profile overview | Profile image, user name, posts count, followers count, following count,  | -                            | -                |
|                  | user id, user bio                                                         |                              |                  |
| Profile stories  | story images list                                                         | -                            | -                |
| Profile posts    | post images list                                                          | -                            | -                |
| Loader           |                                                                           | -                            | -                |
| Failure view     | illustration, message, "Retry" button                                     | -                            | -                |

**Search Results**

| Component      | Details                                                            | State                | API              |
| -------------- | ------------------------------------------------------------------ | -------------------- | ---------------- |
| Post Item      | Post User Profile image, Post User Profile name, Post image ,      | apiStatus, postsData | Search Posts API |
|                | buttons (Like, Comment, Share) ,likes count, title, comments, time | isPostLiked          | Post Like API    |
| Loader         |                                                                    |                      |                  |
| SearchNotFound | image, title, description                                          |                      |                  |

**Not Found**

| Component | Details                                       | State | API |
| --------- | --------------------------------------------- | ----- | --- |
| NotFound  | image, title, description, "Home Page" button |       |     |

## Resources

### Design files

Reference: <a href='https://www.figma.com/file/FwBVnpWfl5DYJ77kbljTdT/Insta_Share?type=design&node-id=0-1&mode=design&t=3fhj1Ab2N8o7n0vn-0' target='_blank'>Insta Share - Figma</a>

### APIs

- Login API: https://apis.ccbp.in/login
- User Stories API: https://apis.ccbp.in/insta-share/stories
- Posts API: https://apis.ccbp.in/insta-share/posts
- Post Like API: https://apis.ccbp.in/insta-share/posts/{postId}/like
- My Profile API: https://apis.ccbp.in/insta-share/my-profile
- User Profile API: https://apis.ccbp.in/insta-share/users/{userId}
- Search Posts API: https://apis.ccbp.in/insta-share/posts?search={searchInput}

### Third-party packages

Provided Third-party packages

- Routes, etc (react-router-dom)
- Icons (react-icons)
- Loader (react-loader-spinner)

Mentioned Third-party packages

- (react-slick)
