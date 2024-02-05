const inputFromUserBody = document.querySelector(".inputFromUser-body");
const inputData = document.querySelector(".inputData");
const findButton = document.querySelector(".findUserButton");

const info = document.querySelector(".info");

setTimeout(() => {
  info.remove();
}, 4000);
const alertBox = document.querySelector(".alertBox");
findButton.addEventListener("click", () => {
  if (inputData.value === "") {
    alertBox.style.padding = "10px";
    alertBox.textContent = "Alert : Input is empty.";

    setTimeout(() => {
      alertBox.style.padding = "0";
      alertBox.textContent = "";
    }, 2000);

  } else {
    inputFromUserBody.remove();
    const body = document.querySelector(".allBody");

    fetch(`https://api.github.com/users/${inputData.value}`)
      .then((response) => response.json())
      .then((result) => {
        //creating main container
        const container = document.createElement("div");
        container.classList.add("container");
        body.appendChild(container);

        //image section
        const image = document.createElement("div");
        image.classList.add("imageContainer");
        image.style.backgroundImage = `url(${result.avatar_url})`;
        container.appendChild(image);

        // info container
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("infoContainer");
        container.appendChild(infoContainer);

        //name
        const userName = document.createElement("div");
        userName.classList.add("username");
        userName.innerHTML = `<p>Name : ${result.name}</p>`;
        infoContainer.appendChild(userName);

        //user id
        const userId = document.createElement("div");
        userId.classList.add("userId");
        userId.innerHTML = `<p>Id : ${result.id}</p>`;
        infoContainer.appendChild(userId);

        //  email
        const userEmail = document.createElement("div");
        userEmail.classList.add("useremail");
        userEmail.innerHTML = `<p>Email : ${result.email}</p>`;
        infoContainer.appendChild(userEmail);

        //followers
        const followers = document.createElement("div");
        followers.classList.add("followers");
        followers.innerHTML = `<p>Followers : ${result.followers}</p>`;
        infoContainer.appendChild(followers);

        //following
        const following = document.createElement("div");
        following.classList.add("following");
        following.innerHTML = `<p>Following : ${result.following}</p>`;
        infoContainer.appendChild(following);

        //container for button
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");
        container.appendChild(buttonContainer);

        //button for show more info
        const showMoreButton = document.createElement("button");
        showMoreButton.setAttribute("type", "submit");
        showMoreButton.textContent = "Show all info";
        buttonContainer.appendChild(showMoreButton);

        //button for search another user
        const searchAnotherUser = document.createElement("button");
        searchAnotherUser.textContent = "Search another User";
        buttonContainer.appendChild(searchAnotherUser);

        //event listener for search another user
        searchAnotherUser.addEventListener("click", () => {
          location.reload();
        });

        //event listener for  show more button

        showMoreButton.addEventListener("click", () => {
          if (container.classList.contains("moreInfoActive")) {
            alert("Already displayed");
          } else {
            body.style.marginTop = "200px";
            container.classList.add("moreInfoActive");
            const moreInfo = document.createElement("div");
            moreInfo.classList.add("moreInfoContainer");
            body.appendChild(moreInfo);

            //more data into show more info

            const bio = document.createElement("span");
            bio.textContent = `Bio : "${result.bio}"`;
            moreInfo.appendChild(bio);

            //username
            const username = document.createElement("span");
            username.textContent = `Username : ${result.name}`;
            moreInfo.appendChild(username);

            //user id
            const userId = document.createElement("span");
            userId.textContent = `User Id : ${result.login}`;
            moreInfo.appendChild(userId);

            //usertype
            const type = document.createElement("span");
            type.textContent = `Account Type : ${result.type}`;
            moreInfo.appendChild(type);

            //location
            const location = document.createElement("span");
            location.textContent = `Location : ${result.location}`;
            moreInfo.appendChild(location);

            //email
            const email = document.createElement("span");
            email.textContent = `Email : ${result.email}`;
            moreInfo.appendChild(email);

            //company
            const company = document.createElement("span");
            company.classList.add("company");
            company.innerHTML = `<p>Company : ${result.company}</p>`;
            moreInfo.appendChild(company);

            //hireable
            const hireable = document.createElement("span");
            hireable.textContent = `Hireable : ${result.hireable}`;
            moreInfo.appendChild(hireable);

            //Public repos
            const publicRepos = document.createElement("span");
            publicRepos.textContent = `Public Repository : ${result.public_repos}`;
            moreInfo.appendChild(publicRepos);

            //followers and following
            moreInfo.appendChild(followers);
            moreInfo.appendChild(following);

            //for twitter
            const twitter = document.createElement("span");
            twitter.textContent = `Twitter username : ${result.twitter_username}`;
            moreInfo.appendChild(twitter);

            //account creation 
            const accountCreatedDate = document.createElement("span");
            accountCreatedDate.textContent = `Account created at: ${result.created_at}`;
            moreInfo.appendChild(accountCreatedDate);


            //latest profile update
            const accountUpdatedDate = document.createElement("span");
            accountUpdatedDate.textContent = `Updated at : ${result.updated_at}`;
            moreInfo.appendChild(accountUpdatedDate);

            //blogs
            const blog = document.createElement("span");
            blog.innerHTML = ` Blog : <a href="${result.blog}">${result.blog}</a>`;
            moreInfo.appendChild(blog);

            const gotoAccount = document.createElement("a");
            gotoAccount.href = result.html_url;
            gotoAccount.textContent =
              "Click here to goto user account in Github";
            moreInfo.appendChild(gotoAccount);
          }
        });
      })
      .catch(() => {
        alert("User Not Found!");
      });
  }
});
