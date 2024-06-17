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

      // swiperslide: {
      //   textalign: "center",
      //   fontsize: "18px",
      //   background: " #fff",
      //   display: "flex",
      //   justifycontent: "center",
      //   alignitems: "center",
      // },
      colors: {
        primaryblack: "#1A1A13",
        primarywhite: "#F0F0F5",
        coralblue: "#A7DFFF",
        bluechalk: "#E7EAEE",
        hawkesblue: "#CAECFF",
        royalblue: "#1264D1",
      },
      fontFamily: {
        Montserrat: "Montserrat",
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
        Hand: 'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)),url("{{get_asset_url("../../assets/Card-image-hand-shake.svg")}}") ',
        Tech: 'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)),url("{{get_asset_url("../../assets/VR-image.svg")}}") ',
      }),
    },
  },
  plugins: [],
};
