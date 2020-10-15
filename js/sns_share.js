$(window).ready(function(){ 
  
        $(".post-share a").click(function(){
  
            shareAct(this);
  
        });
  
});
  
function shareAct(a){
  
        var snsCode = $(a).attr('id');
          
        var cUrl = "";//현재페이지 제목
  
        switch(snsCode){
        
            case"fa fa-facebook":
                //페이스북
                cUrl = 'http://www.facebook.com/sharer/sharer.php?u='+cUrl;
            break;
				
            case"fa fa-twitter":
                //트위터
                cUrl = 'https://twitter.com/intent/tweet?text=페이지제목:&url='+cUrl;
            break;
  
				
            case"fa fa-google-plus":
                //구글
                cUrl = 'https://plus.google.com/u/0/share?url=URL'+cUrl;
            break;
            
  
				
			case"fa fa-envelope":
                //메일
                cUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=TITLE&ui=2&tf=1&body=URL'+cUrl;
            break;	
  
        }
  
        window.open(cUrl,'','width=600,height=300,top=100,left=100,scrollbars=yes');
  
    }
