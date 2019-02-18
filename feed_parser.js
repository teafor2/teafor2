

$(document).ready(function() { 
  var url = 'http://rssfeeds.tv.adobe.com/learn-epub.xml';
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.dir(entry); 
                
                var title = entry.title;
                var link= entry.link;
                var description = entry.description;
                
                var output = "<a href=&quote;"
                    output += link.toString()
                    output += "&quote>"
                    output += "<br><h5>"
                    output += title.toString()
                    output += "</h5></a>"
                    output += "<br>"
                    output += description.toString()
                    
                
                document.getElementById('adobe').innerHTML += output;
            }
        }
    });
    
});
 


$(document).ready(function() { 
  var url = 'http://feeds.feedburner.com/fontspace?format=xml';
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.dir(entry); 
                
                var title = entry.title;
                var link= entry.link;
                var description = entry.description;
                
                var output = "<a href=&quote;"
                    output += link.toString()
                    output += "&quote><h4>"
                    output += title.toString()
                    output += "</h4></a><article>"
                    output += description.toString()
                    output += "</article>"
                    
                
                document.getElementById('fonts').innerHTML += output;
            }
        }
    });
    
});






$(document).ready(function() { 
  var url = 'http://feeds.feedburner.com/ColourloversCoup0Palettes/New?format=xml';
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.dir(entry); 
                
                var title = entry.title;
                var link= entry.link;
                var description = entry.description;
                
                var output = "<a href=&quote;"
                    output += link.toString()
                    output += "&quote><h4>"
                    output += title.toString()
                    output += "</h4></a><article>"
                    output += description.toString()
                    output += "</article>"
                    
                
                document.getElementById('colour').innerHTML += output;
            }
        }
    });
    
});






$(document).ready(function() { 
  var url = 'http://feeds.feedburner.com/brainyquote/QUOTEBR';
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.dir(entry); 
                
                var title = entry.title;
                var link= entry.link;
                var description = entry.description;
                
                var output = "<aside><b>"
                    output += title.toString()
                    output += "</b></aside></a><article>"
                    output += description.toString()
                    output += "</article>"
                    
                
                document.getElementById('quotes').innerHTML += output;
            }
        }
    });
    
});

 