$(document).ready(function(){
	$("#myTab li a").trigger("click");

$('#myTab li a').click(function (e) {
  e.preventDefault()
  	var clicklink = ($(this).attr('href'));
  	$('div.tab-content').children().hide();

  	var tag = '#' + clicklink;
	$(tag).show();
  	//$('div.tab-content').siblings().hide();  	
})

/*$('#myTab').on('click','li',function(e){
	alert(e.target);
	
	$('div.tab-content').children().hide();
	//$(this).tab('show');
});*/

});