/// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXxb0hSLP8SZX5vJjD2_RYWBaI_98ftcY",
    authDomain: "snappy-b4362.firebaseapp.com",
    databaseURL: "https://snappy-b4362.firebaseio.com",
    projectId: "snappy-b4362",
    storageBucket: "snappy-b4362.appspot.com",
    messagingSenderId: "936789182205"
  };
  firebase.initializeApp(config);

var firestore = firebase.firestore();


getRealtimeUpdates2 = function(){
    
    firestore.collection("samples").where("good", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            
            var x = document.querySelector('div.support-ticket');
            x.setAttribute('id',doc.id);

            x.innerHTML = '<div class="st-meta">    <div class="badge badge-success-inverted">'+doc.data().status+'</div>       <div class="status-pill green">        </div>       </div>     <div class="st-body">     <div class="avatar">            <img alt="" src="'+doc.data().em_icon+'">      </div>     <div class="ticket-content">        <h6 class="ticket-title">'+doc.data().em_type+'</h6>          <div class="ticket-description">          <i class="os-icon os-icon-ui-92"></i>        '+doc.data().address+'        </div>        </div>     </div>  <div class="st-foot">         <span class="label">Driver:</span>     <a class="value with-avatar" href="#">             <img alt="" src="img/avatar1.jpg">            <span>'+doc.data().driver_name+'</span>         </a>        <span class="label">Time:</span>        <span class="value">'+doc.data().time+'</span>     </div>';

            var node = document.createElement("option");
            var textnode = document.createTextNode(doc.id);
            node.appendChild(textnode);
            document.getElementById("Emergencies").appendChild(node);

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


getRealtimeUpdates2();


