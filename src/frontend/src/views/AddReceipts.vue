<template>
<TheNavigation/>
<router-view>
</router-view>
<div id="page">
<div class="vue-template">
 <form @submit.prevent="processReceipt">
            <h1>Add Receipts</h1>
            <div>
              <label for="title">Business Name:</label>
              <input v-model="title" type="text" placeholder="Name" required />
            </div>
            <div>
              <label for="category">Category:</label>
                <input v-model="category" type="text" placeholder="Category"  />
            </div>
            <div>
                <label for="amount">Total:</label>
                <input v-model="amount" type="text" placeholder="$ total" required />
            </div>
            <div>
              <label for="date">Date:</label>
              <input v-model="date" type="date" required />
            </div>


            <button>Submit</button>
            <br>
            <button><router-link to="/receipt/view">View Receipts</router-link></button>
 </form>
 </div>
 </div>
</template>

 <script>
 import TheNavigation from "@/views/TheNavigation.vue";
    export default {
      data() {
        return {
          title: "",
          category: "",
          amount: "",
          date: "",
        };
      },
      methods: {
        async processReceipt() {
            const receipt = {
                 title: this.title,
                 category: this.category,
                 amount: this.amount,
                 date: this.date,
            };

            if (this.title == "" && this.title == null) {
                alert("Please fill out name")

            } else if (this.amount == "" && this.amount == null) {
                alert("Please fill out total amount")

            } else if (this.date == "" && this.date == null) {
                alert("Please fill out date")


            } else {


            try {
                const response = await fetch("/api/receipt/add", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(receipt),
                        });

                        if (response.ok) {
                         this.$router.push('/receipt/view');

                        } else {
                         alert("Receipt add failed");

                        }
            } catch (error) {

               console.error("Error posting receipt", error);

               this.errorMessage = "Please try again";
             }
        }
     },
     },
     components: {
        TheNavigation,
     },
 };
 </script>