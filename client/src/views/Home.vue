<template>
  <v-container>
    <v-col cols="12" sm="6" md="5">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            v-model="coupon"
            label="Coupon"
            placeholder="####-####-####"
            outlined
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
        </v-card-actions>
      </v-card>
      <v-img :src="image" v-show="image" aspect-ratio="1" class="grey lighten-2"></v-img>
    </v-col>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    coupon: "",
    image: ""
  }),
  methods: {
    async onSubmit() {
      try {
        const response = await axios.post("/coupon", { coupon: this.coupon });
        this.image = `${process.env.VUE_APP_API_URL}/${response.data}`;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
