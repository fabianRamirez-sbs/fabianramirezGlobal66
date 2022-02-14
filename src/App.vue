<template>
  <v-app>
    <div class="">
      <AppBar />
      <router-view></router-view>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import AppBar from '@/components/globalComponents/AppBar'
import Footer from '@/components/globalComponents/Footer'

export default {
  name: 'App',

  components: {
    AppBar,
    Footer
  },

  data: () => ({
  }),
  created () {},
  mounted () {}
}
</script>

<style>
aside,
header,
footer,
article,
span {
  padding: 10px;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-family: san-serif;
  font-size: 1.2em;
}

.flex-wrapper {
  display: flex;
}

h1,
p {
  padding: 5px;
}

@media only screen and (max-width: 850px) {
  .grid-wrapper {
    display: block;
  }

  .flex-wrapper {
    flex-direction: column;
  }

  .image {
    margin-bottom: 20px;
  }
}

/*additional styles*/

body {
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
}

li {
  list-style-type: none;
  display: inline;
  padding: 0 10px;
}
li:hover {
  opacity: 0.5;
}
a {
  list-style-type: none;
  text-decoration: none;
}

h1 {
  font-size: 6.5rem;
  margin: 0;
  color: #000;
  line-height: 5rem;
  margin: 15px 0;
}

h3 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 300;
  color: #000;
  letter-spacing: 0.5rem;
}

.button {
  width: 30%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 20px;
  text-align: center;
  font-weight: 700;
  background-color: #000;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
}
.button:hover {
  opacity: 0.5;
}

.fab {
  font-size: 1.4rem;
  margin: 10px;
  cursor: pointer;
}
.fab:hover {
  opacity: 0.5;
}

@media only screen and (max-width: 850px) {
  .grid-wrapper {
    background-image: url("https://images.unsplash.com/photo-1504019853082-9a4cb128c1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
    background-size: cover;
    background-position: center;
    background-blend-mode: screen;
    display: flex;
    flex-direction: column;
    color: #ddd;
  }
  header ::after {
    content: none !important;
  }

.background{
display: none
}
  h1 {
    font-size: 3.5rem;
    margin-top: 0;
    padding-top: 10px;
    color: lightseagreen;
  }

  h3 {
    letter-spacing: 0.8rem;
  }

  ul {
    flex-direction: column;
    text-align: right;
    width: 150px;
    justify-self: end;
    margin: 0;
  }

  li {
    padding: 1px 5px 1px 0;
    color: #fff;
  }

  li:last-child {
    margin: 5px 0;
    display: block;
  }
  li:hover {
    opacity: 0.5;
  }

  aside {
        grid-column: 12;
    flex-grow: 1;
  }
}
</style>
