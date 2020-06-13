<template>
  <b-row id="reads_div">
    <b-col md="2"></b-col>
    <b-col md="6" style="margin: auto">
      <b-row class="bookDiv justify-content-center" v-for="book in books" :key="book">
        <b-col sm="2">
          <b-img :src="book.imgLink" class="bookCoverImg" />
        </b-col>
        <b-col sm="6">
          <p class="bookTitle">{{book.title}}</p>
          <p>
            <i>{{book.author}}</i>
          </p>
          <p>
            <a :href="book.link">Amazon</a>
          </p>
        </b-col>
      </b-row>
    </b-col>
    <b-col md="2">
      <p v-for="(year, index) in years" :key="index">
        <b-button
          size="lg"
          variant="link"
          :disabled="year == selectedYear"
          v-on:click="refreshBookList(year, index)"
        >{{year}}</b-button>
      </p>
    </b-col>
  </b-row>
</template>

<script>
import reads from "../assets/reads.json";
export default {
  name: "Reads",
  data() {
    return {
      years: [],
      selectedYear: null,
      books: []
    };
  },
  methods: {
    refreshBookList(year, index) {
      if (year == this.selectedYear) {
        return;
      }

      this.books = reads[index].reads;
      this.selectedYear = year;
    }
  },
  created: function() {
    for (let index in reads) {
      this.years.push(reads[index].year);
    }
    this.selectedYear = this.years[0];
    this.books = reads[0].reads;
  }
};
</script>

<style scoped>
#reads_div {
  margin-top: 2%;
  text-align: center;
}
.bookCoverImg {
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin: auto;
}
.bookDiv {
  padding-top: 2%;
  padding-bottom: 2%;
}
.bookTitle {
  font-size: 1.7em;
}
</style>
