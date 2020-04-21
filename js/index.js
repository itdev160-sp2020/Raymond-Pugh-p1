const siteContent = {
    'nav':{
        'nav-item-1': 'Home',
        'nav-item-2': 'About',
        'nav-item-3': 'Contact'
    },
    'topcontent':{
        "toptext":'Donec sit amet sapien egestas, vehicula enim nec, tristique turpis. Donec feugiat porttitor sem, vel porta justo ullamcorper ut. Nulla bibendum nisi vel leo pellentesque sagittis. Duis a fermentum leo. Aenean lacinia lorem eget pharetra suscipit. Vestibulum aliquet erat nisl, in bibendum ante pharetra eu. Duis venenatis blandit lacus, nec facilisis velit tincidunt a.'
    },
    'middlecontent':{
        'middletext':'Quisque congue sodales leo, et pretium mauris tincidunt in. Etiam sit amet maximus turpis. Nulla tristique metus in tellus posuere suscipit. In ultricies quam ex, a sollicitudin enim dapibus mattis. Duis accumsan tellus ac porta placerat. Donec porta malesuada quam, at pretium leo aliquam volutpat. Vivamus ac convallis ante, volutpat posuere odio. Nunc condimentum enim ut luctus gravida. Nunc vulputate varius consequat. Nunc semper viverra dolor, at accumsan ligula scelerisque non. Quisque eget mauris sed ante porta commodo eget sed tellus. Donec et sapien tortor. Mauris justo turpis, sodales vel euismod nec, commodo vitae sem.'
    },
    'bottomcontent':{
        'bottomtext': 'Suspendisse potenti. Fusce pretium porttitor mi ut euismod. Praesent aliquam mi urna, quis rhoncus quam hendrerit ac. Vivamus fermentum consequat consectetur. Duis ac est ac tortor tristique ultrices non et enim. Ut pretium ipsum magna, id egestas magna vulputate vel. Proin libero sapien, placerat vitae ipsum non, aliquet aliquam neque. Mauris sit amet tincidunt lorem. Suspendisse tempus venenatis orci vitae malesuada. Donec porta, ante in scelerisque semper, arcu massa fermentum nisl, vel varius felis ante sed justo. Quisque ornare erat vel sapien convallis, ut commodo est rutrum. In luctus magna non maximus interdum.'
    }
}

function fill(items, values) {
    items.forEach((item, index) => item.innerText = values[index]);
  }

let nav = document.querySelector('nav');
let firstNav = document.createElement('a')
let lastNav = document.createElement('a')

let navItems = document.querySelectorAll('nav a');
let navValues = Object.values(siteContent['nav']);

fill(navItems, navValues);

let topContent = document.querySelector('topcontent');
let topText = document.createElement('toptext')

let topItems = document.querySelectorAll(".topcontent .toptext");
let topValues = Object.values(siteContent['topcontent']);

fill (topItems, topValues);

let middleContent = document.querySelector('middlecontent');
let midddleText = document.createElement('middletext')

let middleItems = document.querySelectorAll(".middlecontent .middletext");
let middleValues = Object.values(siteContent['middlecontent']);

fill (middleItems, middleValues);

let bottomContent = document.querySelector('bottomcontent');
let bottomText = document.createElement('bottomtext')

let bottomItems = document.querySelectorAll(".bottomcontent .bottomtext");
let bottomValues = Object.values(siteContent['bottomcontent']);

fill (bottomItems, bottomValues);

