const testimonialsData = [
  {
    id: 1,
    author: 'Roland Weedon',
    designation: 'CEO & Founder, Essex Mortgage',
    desc: 'The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their',
  },
  {
    id: 2,
    author: 'Wilson',
    designation: 'User',
    desc: 'Vivamus euismod sem tincidunt lorem scelerisque hendrerit. Proin vel libero sed erat imperdiet luctus sit amet ut lectus. Pellentesque efficitur a sem ac hendrerit.',
  },
  {
    id: 3,
    author: 'Steve',
    designation: 'Manager',
    desc: 'Aenean commodo, libero id consequat sagittis, magna risus aliquam lorem, sed pulvinar augue metus nec magna. Aenean tortor velit, malesuada et neque vel, hendrerit fermentum diam.',
  },
  {
    id: 4,
    author: 'Harvey',
    designation: 'Product Head',
    desc: 'Aliquam eu tempor nisi. Proin commodo neque vel ante aliquet sagittis. Vestibulum auctor, nisl ac luctus pretium, orci diam rhoncus massa, vel condimentum purus velit nec enim.',
  },
  {
    id: 5,
    author: 'Tom Stallon',
    designation: 'Customer',
    desc: 'Cras vehicula at tortor eu sagittis. Vestibulum tempus fermentum faucibus. Sed at erat orci. Nam hendrerit lacinia libero a finibus. Sed quis nibh quam. Phasellus elementum mauris ex, sit amet congue tellus congue sed.',
  },
];

const nav = document.querySelector('.navbar');
const about = document.querySelector('.about-section');
const landing = document.querySelector('.landing-section');
let stat = document.querySelectorAll('.stat');
let start = false;
let max;
let testDescContainer = document.querySelector('.test-desc-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playVideo-btn');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const video = document.querySelector('.Video');

let i = 0;
let j = testimonialsData.length;
let displayTestimonials = () => {
  const { author, designation, desc } = testimonialsData[i];
  testDescContainer.innerHTML = `
    <p id= "testi-desc">${desc}</p>
    <div class="authorWrapper">
      <h3>${author}</h3>
      <span>${designation}</span>
    </div>
  `;
};

nextBtn.addEventListener('click', () => {
  i = (j + i + 1) % j;
  displayTestimonials();
});

prevBtn.addEventListener('click', () => {
  i = (j + i - 1) % j;
  displayTestimonials();
});

window.onload = displayTestimonials;

let inc = [];
function intervalFunc() {
  for (let i = 0; i < stat.length; i++) {
    inc.push(1);
    if (inc[i] != stat[i].getAttribute('data-max')) {
      inc[i]++;
    }
    stat[i].innerHTML = inc[i];
  }
}

function increaseCount() {
  const timer = setInterval(() => {
    let topElem = about.offsetTop;
    let btmElem = about.offsetTop + about.clientHeight;
    let topScreem = window.pageYOffset;
    let btmScreem = window.pageYOffset + window.innerHeight;
    if (btmScreem > topElem && topScreem < btmElem) {
      intervalFunc();
    } else {
      clearInterval(timer);
      for (let i = 0; i < stat.length; i++) {
        stat[i].innerHTML = 0;
        inc = [];
      }
    }
  }, 100);
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
  increaseCount();
};

playBtn.addEventListener('click', () => {
  videoContainer.classList.add('active');
  video.play();
});
close.addEventListener('click', () => {
  videoContainer.classList.remove('active');
  video.pause();
});
