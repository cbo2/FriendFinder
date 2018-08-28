function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

var friends = [];

var newFriend = new Friend('cbo1', 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [1,1,1,1,1,1,1,1,1,1]);
friends.push(newFriend);
newFriend = new Friend('cbo2', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [2,2,2,2,2,2,2,2,2,2]);
friends.push(newFriend);
newFriend = new Friend('cbo3', 'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [3,3,3,3,3,3,3,3,3,3]);
friends.push(newFriend);
newFriend = new Friend('cbo4', 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [4,4,4,4,4,4,4,4,4,4]);
friends.push(newFriend);
newFriend = new Friend('cbo5', 'https://images.pexels.com/photos/213117/pexels-photo-213117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [5,5,5,5,5,5,5,5,5,5]);
friends.push(newFriend);
newFriend = new Friend('cbo6', 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', [1,2,3,4,5,5,4,3,2,1]);
friends.push(newFriend);

module.exports = {
    constructor: Friend,
    friends: friends
}
