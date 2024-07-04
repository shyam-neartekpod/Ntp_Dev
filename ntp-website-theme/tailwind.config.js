module.exports = {
  content: [
    "./modules/**/*.{html, css, js}",
    "./templates/**/*.{html, css, js}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // maxWidth:"1180px"

        padding: "110px",
      },
      swiper: {
        width: "100%",
        height: "100%",
      },

      colors: {
        primaryblack: "#1A1A13",
        primarywhite: "#F0F0F5",
        coralblue: "#A7DFFF",
        bluechalk: "#E7EAEE",
        hawkesblue: "#CAECFF",
        royalblue: "#1264D1",
        errorred: "C00F0C",
        backblue: "#00A2FF",
        backyellow: "#DEF100",
        backpink: "#6100FF",
        grassmarpisam: {
          light: "#a8e4a0",
          DEFAULT: "#76c7c0",
          dark: "#4b8e8d",
        },
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
      backgroundOpacity: {
        30: "0.3",
      },
      borderColor: {
        customcolor: "linear-gradient(254deg, #FDFEFF 3.46%,  #DCEAFD 99.94%)",
      },

      backgroundImage: (theme) => ({
        WorldMap: 'url("{{get_asset_url("../../assets/Globe.svg")}}")',
        Easy: 'url("{{get_asset_url("../../assets/Subtract.png")}}")',
        Family:
          'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("{{get_asset_url("../../assets/fam.svg")}}")',
        Architucture:
          'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("{{get_asset_url("../../assets/arch.svg")}}")',
        Building:
          'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("{{get_asset_url("../../assets/bulid.png")}}")',
        Hand: 'url("{{get_asset_url("../../assets/Card-image-hand-shake.svg")}}") ',
        Tech: 'url("{{get_asset_url("../../assets/VR-image.svg")}}") ',
        customgradient:
          "linear-gradient(254deg, #FDFEFF 3.46%,  #DCEAFD 99.94%)",
        servicefradient:
          " linear-gradient(90deg, rgba(220,234,253,1) 11%, rgba(253,254,255,1) 64%)",
      }),
    },
  },
  plugins: [],
};
