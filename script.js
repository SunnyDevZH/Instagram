let posts = [ // Jason Array //
    {
      "author": "Belinda",
      "profil": 'img/fotografin.jpeg',
      "image": 'img/malen.jpeg',
      "iconHeart": 'img/favorite-black.png',
      "iconHeartRed": 'img/favorite.png',
      "iconPaperplane": 'img/paperplane.ico',
      "iconPost": 'img/comments.ico',
      "iconBookmark": 'img/bookmark.ico',
      "likes": "Gefällt 267 Mal",
      "description": "New Home #Hamburg #NewHome ",
      "location": "Hamburg",
      "comments": []
    },
    {
      "author": "Brian",
      "profil": 'img/mann.jpeg',
      "image": 'img/Wandern.webp',
      "iconHeart": 'img/favorite-black.png',
      "iconHeartRed": 'img/favorite.png',
      "iconPaperplane": 'img/paperplane.ico',
      "iconPost": 'img/comments.ico',
      "iconBookmark": 'img/bookmark.ico',
      "likes": "Gefällt 147 Mal",
      "description": "Dolomiten #Wanderlust #Natur #FreeSpirit",
      "location": "Dolomiten",
      "comments": []
    },
    {
      "author": "Anna",
      "profil": 'img/anna.jpeg',
      "image": 'img/studieren.jpeg',
      "iconHeart": 'img/favorite-black.png',
      "iconHeartRed": 'img/favorite.png',
      "iconPaperplane": 'img/paperplane.ico',
      "iconPost": 'img/comments.ico',
      "iconBookmark": 'img/bookmark.ico',
      "likes": "Gefällt 85 Mal",
      "description": "Study #Home #Study #Studentlife",
      "location": "Home",
      "comments": []
    },
    
  ];
  
  let newFollowers = [ // Rechtes Array //
    {
      "followerImage": 'img/luca.webp',
      "name": "Luca"
    },
    {
      "followerImage": 'img/moritz.webp',
      "name": "Moritz"
    },
    {
      "followerImage": 'img/leonie.jpeg',
      "name": "Leonie"
    },
    {
      "followerImage": 'img/alessandro.webp',
      "name": "Ale"
    },
    {
      "followerImage": 'img/joelle.jpeg',
      "name": "Joelle"
    }
  ];
  
  function render() {  // Ausgelösst durch onload //
    let postcontainer = document.getElementById('postcontainer');// Zugriff auf Div mittleren container //
    postcontainer.innerHTML = ''; // Div leeren
  
    for (let i = 0; i < posts.length; i++) { // Array durchlaufen //
      const post = posts[i];
  
      postcontainer.innerHTML += `
        <div class="postContent">
          <div class="profil-container">
            <img class="profil-image" src="${post['profil']}">  
            <h3 class="author">${post['author']}</h3>
          </div>
  
          <div class="location">${post['location']}</div>
  
          <div><img class="post-image" src="${post['image']}"></div>
  
          <div class="post-icon-conatiner">
            <div class="post-icon-child">
          <img id="blackHeart${i}" onclick="addFavorite(${i})" class="post-icon" src="${post['iconHeart']}">
            <img class="post-icon" src="${post['iconPaperplane']}">
            <img class="post-icon" src="${post['iconPost']}">
            </div>
            <img class="post-icon" src="${post['iconBookmark']}">
          </div>
  
          <div><h3 id="likeCounter${i}" class="likes">${post['likes']}</h3></div>
  
          <div class="description">
            <h4 class="author-name">${post['author']}:</h4>
            <span class="description-contanier">${post['description']}</span>
          </div>
  
          <div class="show-comments" id="showNewComments${i}"></div>
  
          <div class="new-comment" id="newComment${i}">
            <div><input class="comment-field" id="input${i}" placeholder="Kommentieren..."></div>
            <div><button class="post-button" onclick="addcomment(${i})">Posten</button></div>
          </div>
        </div>
      `;
  
  
      //Neuer Kommentar anzeigen //
      let newComment = document.getElementById(`showNewComments${i}`); // Zugriff auf Div id  Show New Comment //
      for (let i = 0; i < post['comments'].length; i++) { // array comments wird durchlaufen
        const comment = post['comments'][i];
        newComment.innerHTML += `<div class="new-comment-contanier"><b class="User">Yannick:</b> ${comment}</div>`; // Comment wird unter Div new Comments angzeigt //
      }
    }
  }
  
  //Neuer Komentar hinzufügen
  function addcomment(i) { // Wird ausgelösst durch onclick button
    let input = document.getElementById(`input${i}`); // Zugriff auf input
    posts[i]['comments'].push(input.value); // Push input in Array comments
    render(); // alles wieder laden
    input.value = ''; // input leeren
  }
  
  
  /*Wechsel von heart-icon und like zählen*/
  function addFavorite(i) { // Wird ausgelösst durch oncklick img
    const post = posts[i];
    let heartimg = document.getElementById('blackHeart' + i); // Zugriff auf id blackHeart
    let likeCounter = document.getElementById('likeCounter' + i); // Zugriff auf id likeCounter
    let likes = parseInt(likeCounter.innerHTML.split(' ')[1]); //ParsenInt verwandelt zeichen ketten in zahlen, Split entfernt einzelne Zeichenketten, [1] = Fängt bei position 1 an
  
    if (heartimg.src.includes('favorite-black.png')) { // Falls das Herz Black ist 
      heartimg.src = post['iconHeartRed']; // Herz icon rot laden
      likeCounter.innerHTML = `Gefällt ${likes + 1} Mal`; // Like um 1 erhöhen
    } else { // sonst
      heartimg.src = post['iconHeart']; // Icon Heart black laden
      likeCounter.innerHTML = `Gefällt ${likes - 1} Mal`; // Like um1 verringern
    }
  }
  
  /*Follower anzeigen*/
  
    function renderFollower() { // Ausgelösst durch onload
      let followers = document.getElementById('followers'); // Zugriff auf id followers
      followers.innerHTML = ''; // Div leeren
  
      for (let i = 0; i < newFollowers.length; i++) { // Durchlauf von Array newFollowers
        const newFollower = newFollowers[i];
  
        followers.innerHTML += `
          <div class="follower-list">
            <div class="follower-container">
              <img class="follower-image" src="${newFollower.followerImage}">
              <span class="followers-name">${newFollower.name}</span>
              <span class="follower-button">Folgen</span>
            </div>
          </div>
        `;
      }
    }
    
  
  