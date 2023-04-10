export const data = [
  {
    title: "What our clients say",
    description:
      "Our clients happily stay with our services for more several years now. See real reviews from our clients.",
    image: "./assets/dev_image.png",
  },
  {
    title: "Our security ",
    description:
      "Learn more about our security systems to make sure your data is always safe",
    image: "./assets/dev_image.png",
  },
  {
    title: "Our Team",
    description:
      "Our team consists of the best experts in the industry, learn about them",
    image: "./assets/dev_image.png",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
