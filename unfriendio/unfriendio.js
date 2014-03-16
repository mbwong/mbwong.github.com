// Script for main app
 
 function loadData() {
   $("#friendsList").html("");
   $("#refresh").html("").hide();
   $("#status").html("Waiting for Facebook... This may take a couple minutes.").show();
   $('#appinfo').html(
'<p>Since this app requires making many asynchronous requests'+
     ' through your browser to the Facebook API, it takes a couple minutes to load all the data.'); 
   // (re)initialize globals 
   sortable = [];
   friends_table = new Object();
   FB.api('/me/friends', handleFriends)
 }

 function handleFriends(friends) {
   if (friends.paging.next != undefined) {
     FB.api(friends.paging.next, handleFriends)
   }
   if (friends.data != undefined ) {
     var n = friends.data.length;  
     var batch1 = []; var batch2 = []; var ids = [];
     for (var i=0; i < n; i++) {
       var id = friends.data[i].id
       friends_table[id] = new Object;
       ids.push(id);
       batch1.push( { method: 'GET', relative_url: "me/mutualfriends/"+id});
       batch2.push( { method: 'GET', relative_url: id});
       if (batch1.length == 50) {
         FB.api('/', 'POST', { batch: batch1 }, handleMutualFriends(ids))
         FB.api('/', 'POST', { batch: batch2 }, handleUser(ids))
         batch1 = []; batch2 = []; ids = [];
         total+=2; count+=2;
       }
     }
     if (batch1.length != 0) {
        FB.api('/', 'POST', { batch: batch1 }, handleMutualFriends(ids))
        FB.api('/', 'POST', { batch: batch2 }, handleUser(ids))
        total+=2; count+=2;
     }
   }
 }
 
 function handleUser(ids) {
  return function(batchresponse) {
    $("#status").html("Loading friends' information (" + (100 - Math.floor(count/total*100)) + "% done)");
    for (var i = 0; i < batchresponse.length; i++) {
     if (batchresponse[i]) { 
      var user = JSON.parse(batchresponse[i].body);
      friends_table[user.id].name = user.name;
      friends_table[user.id].hometown = user.hometown;
      friends_table[user.id].work = user.work;
      friends_table[user.id].education = user.education;
      friends_table[user.id].link = user.link;
      friends_table[user.id].updated_time = user.updated_time;
     }
   }
   count--;
   if (count == 0) { getFeeds(); }
  }
 }

 function handleMutualFriends(ids) {
  return function(batchresponse) {
   for (var i = 0; i < batchresponse.length; i++) {
    if (batchresponse[i]) { 
     var mutualfriends = JSON.parse(batchresponse[i].body);
     friends_table[ids[i]].mutualfriends = (mutualfriends.data != undefined) ? mutualfriends.data.length : 0;
    }
   }
   count--;
   if (count == 0) { getFeeds(); }
  }
 }

 function getFeeds() {
   $("#status").html("Preprocessing data...");
   function update_time_cmp(a,b) {
     return new Date(a[1].updated_time).getTime() - new Date(b[1].updated_time).getTime()
   }  

   sortable = [];
   for (var friend in friends_table) {
     sortable.push([friend, friends_table[friend]]);
   }
   sortable.sort(update_time_cmp); 

   var batch = [];
   var ids = [];
   total = count = 0;
   for (var i=0; i < sortable.length; i++) {
       ids.push(sortable[i][0]);
       batch.push( { method: 'GET', relative_url: sortable[i][0] +"/feed?limit=1&fields=created_time"} );
       if ((i+1) % 50  == 0) {
         FB.api('/', 'POST', { batch: batch }, handleFriendFeeds(ids))
         total++; count++;
         batch = []; ids = []; 
       }
   }
   if (batch.length != 0) {
      FB.api('/', 'POST', { batch: batch }, handleFriendFeeds(ids))
      total++; count++;
   }
 }

 function handleFriendFeeds(ids) { 
   return function(batchresponse) {
     console.log(batchresponse);
     $("#status").html("Loading friends' walls (" + (100 - Math.floor(count/total*100)) + "% done)");
     for (var i = 0; i < batchresponse.length; i++) {
       if (batchresponse[i]) { 
         var feed = JSON.parse(batchresponse[i].body);
         if (feed.data != undefined) {
           if (feed.data.length != 0) {
             friends_table[ids[i]].feed_update_time = feed.data[0].created_time;
           }
         }
       }
     }
     count--;
     if (count == 0) { analyze(); }
   }
 }

 function analyze() {
   $("#status").html("Processing data...");

   function mutualfriends_cmp(a, b) {
     var atmp = a[1].mutualfriends; var btmp = b[1].mutualfriends;
     if (atmp == undefined) { atmp = -1; }
     if (btmp == undefined) { btmp = -1; }
     return atmp - btmp;
   }

   function update_time_cmp(a,b) {
     a1 = new Date(a[1].updated_time).getTime();
     b1 = new Date(b[1].updated_time).getTime();
     a2 = new Date(a[1].feed_update_time).getTime();
     b2 = new Date(b[1].feed_update_time).getTime();
     if (!isNaN(a2))
       a1 = (a1+2*a2)/3;
     if (!isNaN(b2)) 
       b1 = (b1+2*b2)/3;  
     return a1 - b1;
   } 
 
   sortable = [];
   for (var friend in friends_table) {
     sortable.push([friend, friends_table[friend]]);
   }
   sortable.sort(update_time_cmp);
   
   $.jStorage.set("friends_table",friends_table);
   displayFriends();
 }

 function displayFriends() {
   $('#appinfo').html("It's done! Your most inactive Facebook friends are ranked below."
     +' <p>Note that your Facebook friends may not allow you to access their activities through the API,'+
     ' so the results may be less informative for certain users. I am working to make the rankings more accurate.'); 
   $('#refresh').append("Reload data from Facebook").click(loadData).show();
   $("#friendsList").html('<table id="friendsTable"><tr class="tableHeader">'
                         +'<td>Name</td>'
                         +'<td># Mutual Friends</td>'
                         +'<td>Last Profile Update</td>'
                         +'<td>Last Wall Activity</td>'
                         +'</tr></table>');
   $("#status").hide();
   for (var i=0; i < sortable.length; i++) {
	 //var img = new Image();
	 //img.src = 'https://graph.facebook.com/' + friend.id + '/picture';
	 var name = sortable[i][1].name 
	 var mutualfriends = sortable[i][1].mutualfriends
	 var updated_time = new Date(sortable[i][1].updated_time)
         var feed_update_time = new Date(sortable[i][1].feed_update_time)
         var element = '<tr class="friend"><td><a href='+sortable[i][1].link+'>';
         element += name;
         element += "</a></td><td>";
         element += (mutualfriends != undefined) ? mutualfriends : "";
         element += "</td><td>";
         element += (!isNaN(updated_time.getTime())) ? updated_time.toDateString() : "";
         element += "</td><td>";
         element += (!isNaN(feed_update_time.getTime())) ? feed_update_time.toDateString() : "";
         element += "</tr>";
	 $("#friendsTable").append(element);
	 //newDiv.appendChild(img); 
   }
 }

 function clearData() {
   $.jStorage.set("friends_table",null);
 }

 // main
 function unfriendio() {
   if(!friends_table){
	 loadData(); 
   } else { 
     analyze(); 
   }
 }

 // globals
 var me = null;
 var count = 0;    
 var total = 0;    
 var sortable = [];
 var friends_table = $.jStorage.get("friends_table");

 $('#unfriendio').click(function() { 
   $('#unfriendio').hide();
   login(unfriendio, 'friends_status,'
		  +'user_hometown,user_work_history,user_education_history,'
		  +'friends_hometown,friends_work_history,friends_education_history');
 });


