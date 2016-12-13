$(function(){
$('#btn').on('click',function(){
var val=$('#tx').val();
var link='http://www.omdbapi.com/?s='+val;
$.ajax({
type:'GET',
url:link,
success:function(disp){
disp.Search.map(function(item){
$("#disp").append('<div id="poster"><img src='+item.Poster+'></div>');
$("#disp").append('<div id="title">'+item.Title+'</div>');
$("#disp").append('<div id="year">'+item.Year+'</div>');
});
}
});
});
});
