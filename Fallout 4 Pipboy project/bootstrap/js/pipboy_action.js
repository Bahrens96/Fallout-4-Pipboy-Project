

$(document).ready(function(){
var weapons = [
    {
      'name': 'combat_rifle',
      'damage': 33,
       'ammo' : 500,
       'ammo_type': '.45',
      'fire_rate': 33,
      'range': 119,
      'accuracy': 70,
      'weight': 11.1,
      'value': 117
    },
    {
      'name': 'combat_shotgun',
      'damage': 50,
      'ammo' : 250,
      'ammo_type': 'shell',
      'fire_rate': 20,
      'range': 47,
      'accuracy': 23,
      'weight': 11.1,
      'value': 87
    },


    {
      'name': 'gauss_rifle',
      'damage': 110,
      'ammo' : 200,
      'ammo_type': '2mm EC',
      'fire_rate': 66,
      'range': 203,
      'accuracy': 69,
      'weight': 15.8,
      'value': 228
    },


    {
      'name': 'laser_gun',
      'damage': 24,
      'ammo' : 360,
      'ammo_type': 'fusion cell',
      'fire_rate': 50,
      'range': 71,
      'accuracy': 71,
      'weight': 3.5,
      'value': 69
    },

    {
      'name': 'alien_blast_hub',
      'damage': 58,
      'ammo' : 400,
      'ammo_type': 'fusion cell',
      'fire_rate': 100,
      'range': 149,
      'accuracy': 76,
      'weight': 2.5,
      'value': 2751
    },

    {
      'name': 'fat_man',
      'damage': 468,
      'ammo' : 50,
      'ammo_type': 'mini nuke',
      'fire_rate': 1,
      'range': 117,
      'accuracy': 63,
      'weight': 30.7,
      'value': 512
    }
];

$('.item-list a').on('click',function(e){
  $('.item-list a').removeClass('active');
  $(e.currentTarget).addClass('active');
});

  $('.item-list a').on('mouseenter',function(e){
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);


    for(item in weapons){
      if(weapons[item].name == current_item){
          console.log(weapons[item]);

          var container =$('.item-stats');
          container.find('.damage').html(weapons[item].damage);
          container.find('.ammo').html(weapons[item].ammo);
          container.find('.ammo_type').html(weapons[item].ammo_type);
          container.find('.fire_rate').html(weapons[item].fire_rate);
          container.find('.range').html(weapons[item].range);
          container.find('.accuracy').html(weapons[item].accuracy);
          container.find('.weight').html(weapons[item].weight);
          container.find('.value').html(weapons[item].value);


      }
    }


  });


});
