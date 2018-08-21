
function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

var friends = [];

var newFriend = new Friend('cbo1', '.jpeg', [1,2,1,2,1,2,1,2,1,2]);
friends.push(newFriend);
newFriend = new Friend('cbo2', '.jpeg', [1,2,1,2,1,2,1,2,1,3]);
friends.push(newFriend);

module.exports = friends;