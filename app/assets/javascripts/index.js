$(document).ready(function(){
  Menu.init();
});

var Menu = {
  init: function() {
    $("#new_menu").on("ajax:success", this.addMenu);
    $(".menu-name").on("dblclick", this.deleteMenu);
    // console.log($(".menu-name"));
    $(".menu-name").on("click", this.updateMenu);
  },
  addMenu: function(e, data) {
    $("#list-of-menus").append(data);
    $("#menu_name").val("");
  },
  deleteMenu: function() {
    var id = event.toElement.id;
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
    console.log("hey")
  }
};
