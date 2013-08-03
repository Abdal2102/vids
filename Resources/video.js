var vWin = Ti.UI.currentWindow;

var vidFile = 'video/video-test.mp4';

function playVid(){
	var  movPlayer = Ti.Media.createVideoPlayer({
		url:vidFile,
		width:280,
		height:200,
		top:20,
		left:10,
		backgroundColor:"#000"
	});
	vWin.add(movPlayer);
	movPlayer.Play();
}
var vButn = Ti.UI.createButton({
	title:"Rec"
});

vWin.rightNavButton = vButn;
vWin.add(vButn);

vButn.addEventListener("click", function(e){
	if (vButn.title == "Record Video"){
		
		Ti.Media.showCamera({
			success:function(e){
				var vid = e.media;
				movFile = Ti.Filesystem.getFile(
					Ti.Filesystem.applicationDataDirectory,mymov.mov
				);
				movFile.write(vid);
				vidFile = movFile.nativePath;
				vButn.title = "Play";
			},
			cancel:function(){
				
			},
			error:function(e){
				var alrt = Ti.UI.createAlertDialog({
					title:"vid"
				});
				if(error.code = Ti.Media.NO_VIDEO){
					alrt.setMessage("Device is unable to record");
				}else{
					alrt.setMessage("unexpected error: "+ error.code);
				}
				alrt.show();
			},
			videoMaximumDuration:60000,
			videoQuality:Ti.Media.QUALITY_HIGH,
			mediaType:Ti.Media.MEDIA_TYPE_VIDEO
		});
	}else{
		vButn.playVid();
	}
});
	




