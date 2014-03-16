// Script for main app
 BlobBuilder = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
 
 function login(loggedin, scope) {
   FB.login(function(response) {
	 if (response.authResponse) {
	   console.log('User successfully logged in!');
	   $('#login').hide();
	   loggedin();
	 } else {
	   console.log('User cancelled login or did not fully authorize.');
	 }
   }, {'scope': scope});
 }

 function loadPhotoData() {
   console.log("loadData()");
   $("#friendsList").html("");
   $("#refresh").html("");
   $("#status").html("Waiting for Facebook... This may take a while.").show();
   
   // (re)initialize globals 
   sortable = [];
   friends_table = new Object();
   FB.api('/me/photos', { 'limit' : '100' }, handlePhotos(0))
 }

 function handlePhotos(offset) {
   return function(photos) {
     if (photos.data != undefined ) {
       var n = photos.data.length;
       var total = offset + n;
       if (photos.data.length != 0) {
         FB.api('me/photos', {'limit' : '100', 'offset' : total.toString() }, handlePhotos(total))
       }
       $('#status').html("Found " + total + " photos...");
       for (var i=0; i < n; i++) {
         $('#friendsList').append(
           '<a href="'+photos.data[i].images[1].source+'">' +
           '<img src="' + photos.data[i].picture + '" alt="Photo by '+ photos.data[i].from.name+'"/></a>'
         );
       }
       
     }
   }
 }
/*
 function zipAll(imageUrl) {
   function download(blob) {
     try { var blobURL = window.URL.createObjectURL(blob); } 
     catch(err) { var blobURL = window.webkitURL.createObjectURL(blob) }
     window.location.href = blobURL;
   }

   function addPhotos(writer) {
     var addIndex = 0;
     
     function nextFile() {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', imageUrl[addIndex], true);
       xhr.responseType = 'arraybuffer';
       xhr.onload = function(e) {
         console.log('ok')
         if (this.status == 200) {
           var bb = new BlobBuilder();
           bb.append(this.response); // Note: not xhr.responseText

           var blob = bb.getBlob('image/jpg');

           writer.add(addIndex.toString() + ".jpg", new zip.BlobReader(blob), function() {
             addIndex++;
             if (addIndex < imageUrl.length) { nextFile(); }
             else { writer.close(download); }
           }, function(currentIndex, totalIndex) {
              console.log(currentIndex);
           });
         }
       };
       xhr.send();
     }

     nextFile(); 
   }

   zip.createWriter(new zip.BlobWriter(), addPhotos, function(error) {
     console.log("create writer error");
   });
 }
*/

 // globals
 var imageUrls = [];

 $('#photofetcher').click(function() { 
   $('#app').show();
   $('#title').prepend("<h1>Photofetcher</h1>");
   $('#appinfo').append("<p>This app fetches all your Facebook photos.</p>");
   $('#refresh').hide();
   $('#landing').hide();
   login(loadPhotoData, 'user_photos,user_photo_video_tags');
 });
