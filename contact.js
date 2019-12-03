const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
	var newPost = snapshot.val();
});

function send(){
	var name = document.getElementById("LastName").value;
	var email = document.getElementById("email").value;
	var comment = document.getElementById("message").value;
	detailsRef.push().set({
		name: name,
		email: email,
		comment: comment
	});
}
