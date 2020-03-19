const fotoLinks = [
    'https://www.manners.nl/wp-content/uploads/2019/05/john-wick-4-officieel-bevestigd-release-datum-2021-375x210.jpg',
    'https://images.pathe-thuis.nl/11769_1920x1080.jpg',
    'https://www.screendependent.be/wp-content/uploads/2017/07/John-Wick-Chapter-2-2-1440x946.jpg',
    'https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/15940697_10154788616866772_3879875162843967248_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=7d1U6w4MlxcAX9oWSBr&_nc_ht=scontent-ams4-1.xx&oh=41a11bd17ef4471581afe43416583a2e&oe=5E99E7CB',
    'https://i.pinimg.com/564x/cb/fa/10/cbfa10468a0c392f0bcd5dcb7077f226.jpg',
    'https://i0.wp.com/kungfukingdom.com/wp-content/uploads/2014/03/mjw_featured_image.jpg?resize=1024%2C628&ssl=1',
    'https://i.pinimg.com/564x/5c/ac/21/5cac21bdfdc1c47e2925a711c0789d43.jpg',
    'https://uploads-ssl.webflow.com/5dc029ed4f3e356f78096290/5e0b631bc8b0d06c2067afcb_undisputed-ii-last-man-standing_e8debc.jpg',
    'https://www.rtlboulevard.nl/sites/default/files/styles/liggend_breed/public/content/images/2019/11/17/Schermafbeelding%202019-11-17%20om%2017.29.49.png?h=80146339&itok=0cC5Rsf9',
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwOTEwMjE3NzQy/paul-walker-21044993-1-402.jpg',
    'https://topgear.nl/thumbs/hd/2018/02/paul-walker-blauwe-skyline-1-e1519819259889.jpg',
    'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/17TDIeulhd_GTRHelios008.jpg.ximg.l_4_m.smart.jpg',
    'https://topgear.nl/thumbs/hd/2019/04/nissan-gt-r-nismo-2020-9-e1555494641198.jpg',
    'https://images.cdn.superguide.nl/zuH0NeW33nn6OJyNLC8jwO95fAE=/890x0/smart/filters:no_upscale()/superguide.nl/s3fs-public/wysiwyg_images/vin_diesel_furious.jpg?itok=npT7udhs',
    'https://i.pinimg.com/236x/38/78/d2/3878d2cec5042c149d2d108a476b3405.jpg',
    'https://www.linda.nl/lindanl-assets/uploads/2019/03/hh-471250521.jpg',
    'https://media.nu.nl/m/vwxxlrxavfg6_wd640.jpg/jason-statham-nederlandse-kickboksers-zijn-mijn-helden.jpg',
    'https://img.cinemablend.com/filter:scale/quill/6/f/a/4/7/d/6fa47d8e7ea6d70549c3199488ec2dae3fc41df8.jpg?mw=600',
    'https://www.gewoonvoorhem.nl/app/uploads/fly-images/106810/Jason-Statham-Countdown-Rep-e1578660419114-1000x750-c.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jason_Statham_2007.jpg/800px-Jason_Statham_2007.jpg',
    'https://pmcdeadline2.files.wordpress.com/2019/08/kevinhartphotobykevinkwan-e1565889449268.jpg?w=580&h=383&crop=1',
    'https://images.cdn.superguide.nl/UJxSGhEmvPmpdY0o2-cnNL1c3A0=/890x0/smart/superguide.nl/s3fs-public/main_media/kevin-hart-bij-de-mtv-movie-awards.png?itok=4n_rFiB1',
    'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/06/12/2094a6b6-8cc6-11e9-b2aa-5ba392ab87ab_image_hires_162019.jpg?itok=rskMiqlS&v=1560327624',
    'https://ae01.alicdn.com/kf/HTB1iXpqyDlYBeNjSszcq6zwhFXaT/Avengers-Infinity-War-Tony-Stark-Zonnebril-Luxe-Merk-Iron-Man-Glazen-Rechthoek-Vintage-Superhero-Zonnebril-Clear.jpg_50x50.jpg',
    'https://www.gqmiddleeast.com/public/styles/766_431_landscape/public/images/2019/06/12/Tony-Stark.jpg?itok=7-QNeRCi'
];

const container = document.getElementById('container');

function FotoOpScherm(url) {
    let item = document.createElement('div');
    item.className = 'foto';
    let deFoto = document.createElement('img');
    deFoto.src = url;
    deFoto.alt = 'Mijn Gallerij';
    item.append(deFoto);
    container.append(item);
}

for(let i=fotoLinks.length; i>0; i--) {
    let getal = Math.floor(Math.random()*fotoLinks.length);
    FotoOpScherm(fotoLinks[getal]);
    fotoLinks.splice(getal,1);
}    