function getAllUsernames() {
  var user_elements = document.getElementsByClassName('author');
  for (var i = 0; i < user_elements.length; i++) {
    var username = user_elements[i].innerText;
    console.log(username);
  }
}
console.log("Grabbing usernames...")
getAllUsernames();
console.log('Done');