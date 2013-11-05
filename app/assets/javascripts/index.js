$(document).ready(function(){
  Menu.init();
});

var Menu = {
  init: function() {
    $("#new_menu").on("ajax:success", this.addMenu);
    $("#list-of-menus").on("click", ".menu-name", this.updateMenu);
    
    $("#list-of-menus").on("mouseenter", ".menu-name", this.showDelete);
    $("#list-of-menus").on("mouseleave", ".menu-name", this.hideDelete);
    $("#list-of-menus").on("click", ".menu-name .delete-menu", this.deleteMenu);
  },
  
  addMenu: function(e, data) {
    $("#list-of-menus").append(data);
    $("#menu_name").val("");
  },
  
  deleteMenu: function() {
    var id = event.srcElement.parentElement.id;
    $.ajax({
      url: '/menus/'+id,
      type: 'delete'
    })
    .done(function(){
      $("#"+id).remove();
    })
    .fail(function() {
      console.log("error");
    });
  },

  updateMenu: function() {
    var id = this.id;
    var text = $('#name').text();
    // debugger;
    $("#"+id).html('<form action="/menus/"'+ id +'" class="update-form" method="put"><input name="menu[name]" value="'+ text +'"></form>');
  },

  showDelete: function(){
    var id = this.id;
    $('#'+id+' button').removeClass('hidden');
  },

  hideDelete: function(){
    var id = this.id;
    $('#'+id+' button').addClass('hidden');
  }
};

// <div id="button" data-id="33">
// $('div#button').data('id')
