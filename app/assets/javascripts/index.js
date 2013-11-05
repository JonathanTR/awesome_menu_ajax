$(document).ready(function(){
  Menu.init();
});

var Menu = {
  init: function() {
    $("#new_menu").on("ajax:success", this.addMenu);
    $("#list-of-menus").delegate(".menu-name", "click", this.updateMenu);
    $("#list-of-menus").delegate(".menu-name", "mouseenter", this.showDelete);
    $("#list-of-menus").delegate(".menu-name", "mouseleave", this.hideDelete);
    $("#list-of-menus").delegate(".menu-name .delete-menu", "click", this.deleteMenu);
  },
  
  addMenu: function(e, data) {
    $("#list-of-menus").append(data);
    $("#menu_name").val("");
  },
  
  deleteMenu: function() {
    var id = event.srcElement.parentElement.id;
    $.ajax({
      url: '/menus/'+ id,
      type: 'delete'
    })
    .done(function() {
      $("#"+id).remove();
    })
    .fail(function() {
      console.log("error");
    });
  },

  updateMenu: function() {
    var id = event.srcElement.id;

    console.log("before:")
    console.log(event)

    var text = event.srcElement.firstChild.textContent;

    console.log("after:")
    console.log(event)

    $("#"+id).html('<form action="/menus/'+id+'" class="update-form" method="post"><input name="_method" type="hidden" value="put"><input type="text" name="menu[name]" value="'+text+'"></form>');
  },

  showDelete: function(){
    var id = event.srcElement.id;
    $('#'+id+' button').removeClass('hidden');
  },

  hideDelete: function(){
    var id = event.srcElement.id;
    $('#'+id+' button').addClass('hidden');
  }
};
