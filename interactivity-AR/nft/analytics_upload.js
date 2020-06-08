
//var firebase = require("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");

  // Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyA6skrB5NZ3MdVloGS4fab2L327Dr9hn6Y",
authDomain: "klean-tech.firebaseapp.com",
databaseURL: "https://klean-tech.firebaseio.com",
projectId: "klean-tech",
storageBucket: "klean-tech.appspot.com",
messagingSenderId: "921616653844",
appId: "1:921616653844:web:8db927cfec483d190b9101"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var visits_value = 0;
var clicks_value = 0;

var playersRef = firebase.database().ref();

playersRef.on("value", function(data, prevChildKey) {
   var newPlayer = data.val();

   visits_value = newPlayer.visits;
   clicks_value = newPlayer.clicks;
    
    console.log(visits_value);
    console.log(clicks_value);
    
});
     





function upload_visits(){
 
    visits_value = visits_value + 1;

    console.log("visit uploaded");

    playersRef.set({
       visits: visits_value,
       clicks: clicks_value
    }); 

}
//      







function upload_clicked(){
    
    clicks_value = clicks_value + 1;
    
    console.log("click uploaded");
    
    playersRef.set({
       visits: visits_value,
       clicks: clicks_value
    }); 
}
      





setTimeout(() => { 
    console.log("World!");
    upload_visits();
                 }, 10000);



//  function snapped(){
//        html2canvas($('#canvas'), {
//            onrendered: function(canvas) {
//
//              console.log("snapped");
//                upload_clicked();
////                  document.body.appendChild(canvas);
//                var img = canvas.toDataURL()
//                window.open(img);
//            }
//          });
//  }








//        function snapped(){
//            html2canvas($('#canvas'), {
//                onrendered: function(canvas) {
//                    
//                  console.log("snapped");
////                  document.body.appendChild(canvas);
//                    var img = canvas.toDataURL()
//                    window.open(img);
//                }
//              });
//            $(document).ready(function(){
//            
//            console.log("snapped");
////                document.body.appendChild(canvas);
//                html2canvas(document.body, {
//                    onrendered: function(canvas) {
//                        console.log("ready");
//                        var blob = canvas.msToBlob();
//                        window.navigator.msSaveBlob(blob,'Test file.png');
////                        var img = canvas.toDataURL("image/png");
////                        window.open(img);
//                        console.log("done");
//                    }
//                });    
//                
//            });    
//        }


